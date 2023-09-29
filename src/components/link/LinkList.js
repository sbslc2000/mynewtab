import styled from "styled-components";
import Link from "./Link";
import {useEffect, useState} from "react";
import AddLink from "./AddLink";
import {extractFavicon} from "../../util/FaviconExtractor";
import {DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core";
import {rectSortingStrategy, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";
import {useDispatch, useSelector} from "react-redux";
import {linkActions} from "../../store/slices/Link.slice";
import EditLinkModal from "./EditLinkModal";
import {editLinkActions} from "../../store/slices/EditLink.slice";

const Wrapper = styled.div`

  max-width: 628px;
  max-height: 476px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 30px;
`;

export const filterUrl = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    } else {
        return 'http://' + url;
    }
}
const LinkList = () => {
    const dispatch = useDispatch();
    const links = useSelector((state) => state.link.links);
    const isEditing = useSelector((state) => state.editLink.isEditing);
    const editingLink = useSelector((state) => state.editLink.editingLink);

    const closeEditModal = () => {
        dispatch(editLinkActions.closeEditModal());
    }

    const addLink = (name, url) => {

        const filteredUrl = filterUrl(url);
        extractFavicon(filteredUrl).then((favicon) => {
            const newLink = {
                id: Date.now(),
                name: name,
                url: filteredUrl,
                favicon: favicon
            }

            dispatch(linkActions.addLink(newLink));
        }).catch((error) => {});
    }

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 6,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    function handleDragEnd(event) {
        const {active, over} = event;
        if (active.id !== over.id) {
            const oldIndex = links.findIndex((link) => link.id === active.id);
            const newIndex = links.findIndex((link) => link.id === over.id);

            const newLinks = [...links];
            newLinks.splice(oldIndex, 1);
            newLinks.splice(newIndex, 0, links[oldIndex]);

            dispatch(linkActions.setLinks(newLinks));
        }
    }

    return (
        <Wrapper >
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <SortableContext items={links.map(link => link.id)} strategy={rectSortingStrategy}>
                    {links.map((link) => {
                        return <Link key={link.id} link={link}></Link>;
                    })}
                </SortableContext>

            </DndContext>

            <AddLink addLink={addLink}/>
            {isEditing && <EditLinkModal isOpen={isEditing} close={closeEditModal} link={editingLink} />}
        </Wrapper>
    );
}

export default LinkList;