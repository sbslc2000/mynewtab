import styled from "styled-components";
import Link from "./Link";
import {useCallback, useEffect, useState} from "react";
import AddLink from "./AddLink";
import {extractFavicon} from "../util/FaviconExtractor";
import {DndProvider} from "react-dnd";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const Wrapper = styled.div`

  max-width: 620px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 30px;
`;
const LinkList = () => {

    const [links, setLinks] = useState([]);
    useEffect(() => {
        const links = JSON.parse(localStorage.getItem('links'));
        if (links) {
            setLinks(links);
        }
    }, []);

    const addLink = (name, url) => {
        let favicon = extractFavicon(url);
        const newLink = {

            name: name,
            url: url,
            favicon: favicon
        }
        setLinks([...links, newLink]);
        localStorage.setItem('links', JSON.stringify([...links, newLink]));
    }

    const deleteLink = (name, url) => {
        const newLinks = links.filter(link => link.name !== name && link.url !== url);
        setLinks(newLinks);
        localStorage.setItem('links', JSON.stringify(newLinks));
    }

    const handleEnd = (result) => {
if(!result.destination) return;

        const newLinks = links;
        const [reorderedItem] = newLinks.splice(result.source.index, 1);
        newLinks.splice(result.destination.index, 0, reorderedItem);
        setLinks(newLinks);
        localStorage.setItem('links', JSON.stringify(newLinks));
    }

    /**
     * todo: horizontal 과 vertical 이동을 동시에 처리할 수 있게 해야
     *
     */
    return (
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="links" direction="hor함zontal">
                {(provided) => (
                    <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
                        {links.map((link, index) => (
                            <Draggable
                                key={link.name}
                                draggableId={link.name}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <Link key={index} link={link} id={link.name} deleteLink={deleteLink}
                                        provided={provided} snapshot={snapshot}
                                    />
                                )}
                            </Draggable>
                        ))} {provided.placeholder}
                        <AddLink addLink={addLink}/>
                    </Wrapper>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default LinkList;