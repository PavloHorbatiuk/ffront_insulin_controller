'use client';
import { useState } from 'react';
import { Person } from '../../interfaces/interface';
import ItemList from './PersonList';
import { PickFormProps } from './ItemForm.props';


interface PersonsProps {
	persons: Person[];
}

export const PersonsComponents = ({ persons }: PersonsProps) => {
	const [items, setItems] = useState<Person[]>(persons);

	const handleAddItem = (newItem: PickFormProps) => {

	};

	const handleDeleteItem = (rank: number | string) => {
		console.log("delete did")
	};

	const handleItemReorder = (result: any) => {
		if (!result.destination) return;

		const updatedItems = [...items];
		const [movedItem] = updatedItems.splice(result.source.index, 1);
		updatedItems.splice(result.destination.index, 0, movedItem);

		setItems(updatedItems);
	};

	return (
		<>
			<h1>Persons List</h1>
			<ItemList
				persons={items}
				onItemDelete={handleDeleteItem}
				onItemReorder={handleItemReorder}
			/>
		</>
	)
}