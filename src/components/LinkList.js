import styled from "styled-components";
import Link from "./Link";
import {useCallback, useEffect, useState} from "react";
import AddLink from "./AddLink";
import {extractFavicon} from "../util/FaviconExtractor";
import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {rectSortingStrategy, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";

const Wrapper = styled.div`

  max-width: 628px;
  max-height: 620px;
  min-height: 238px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 30px;
`;
const LinkList = () => {

    const [links, setLinks] = useState([]);
    const [linksLastId, setLinksLastId] = useState(null);

    useEffect(() => {
        const links = JSON.parse(localStorage.getItem('links'));
        const linksLastId = Number(localStorage.getItem('linksLastId')) || 0;

        if (links) {
            setLinks(links);
        }
        setLinksLastId(linksLastId);

    }, []);

    const filterUrl = (url) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        } else {
            return 'http://' + url;
        }
    }


    const addLink = (name, url) => {

        const filteredUrl = filterUrl(url);
        extractFavicon(filteredUrl).then((favicon) => {
            const newLink = {
                id: linksLastId,
                name: name,
                url: filteredUrl,
                favicon: favicon
            }

            const newLinksLastId = linksLastId + 1;

            setLinksLastId(newLinksLastId);
            setLinks([...links, newLink]);
            localStorage.setItem('links', JSON.stringify([...links, newLink]));
            localStorage.setItem('linksLastId', newLinksLastId);
        }).catch((error) => {});
    }

    const deleteLink = (id) => {
        const newLinks = links.filter(link => link.id !== id);
        setLinks(newLinks);
        localStorage.setItem('links', JSON.stringify(newLinks));
    }

    const handleEnd = (result) => {
        if (!result.destination) return;

        const newLinks = links;
        const [reorderedItem] = newLinks.splice(result.source.index, 1);
        newLinks.splice(result.destination.index, 0, reorderedItem);
        setLinks(newLinks);
        localStorage.setItem('links', JSON.stringify(newLinks));
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

            setLinks(newLinks);
            localStorage.setItem('links', JSON.stringify(newLinks));
        }
    }

    /**
     * todo: horizontal 과 vertical 이동을 동시에 처리할 수 있게 해야
     *
     */
    return (
        <Wrapper >
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                <SortableContext items={links.map(link => link.id)} strategy={rectSortingStrategy}>
                    {links.map((link, index) => {
                        return <Link key={link.id} link={link} id={link.id} deleteLink={deleteLink}></Link>;
                    })}
                </SortableContext>

            </DndContext>

            <AddLink addLink={addLink}/>
        </Wrapper>

    );
}

export default LinkList;