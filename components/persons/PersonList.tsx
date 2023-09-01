// components/persons/ItemList.tsx

import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Person } from '../../interfaces/interface';
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

interface ItemListProps {
	persons: Person[];
	onItemDelete: (rank: number | string) => void;
	onItemReorder: (result: any) => void;
}

const ItemList: React.FC<ItemListProps> = ({ persons, onItemDelete, onItemReorder }) => {

	return (
		<DragDropContext onDragEnd={onItemReorder}>
			<Droppable droppableId="person-list">
				{(provided) => (
					<List {...provided.droppableProps} ref={provided.innerRef}>
						{persons.map((person, index) => (
							<Draggable key={person.id.toString()} draggableId={person.rank.toString()} index={index}>
								{(provided) => (
									<ListItem
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
									>
										<ListItemText
											primary={`${person.rank}. ${person.name}`}
											secondary={`Email: ${person.email}`}
										/>
										<Link href="/form/edit" style={{ cursor: "pointer" }}>
											<EditIcon />
										</Link>
										<a onClick={() => onItemDelete(person.rank)}>
											<DeleteIcon />
										</a>
									</ListItem>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</List>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default ItemList;
