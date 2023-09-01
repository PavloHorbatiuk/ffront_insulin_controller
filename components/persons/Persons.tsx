'use client';
import { useState } from 'react';
import { Person } from '../../interfaces/interface';
import ItemList from './PersonList';
import { PickFormProps } from './ItemForm.props';
import axios from 'axios';


interface PersonsProps {
	persons: Person[];
}

export const PersonsComponents = ({ persons }: PersonsProps) => {
	const [items, setItems] = useState<Person[]>(persons);

	const handleAddItem = (newItem: PickFormProps) => {

	};

	const handleDeleteItem = async (id: number | string) => {
		const url = process.env.NEXT_PUBLIC_DOMAIN + '/persons';
		try {
			await axios.delete(url + `/${id}`);
			const updatedItems = items.filter((item) => item.id !== id);
			setItems(updatedItems)
		} catch (error) {
			console.error('Error deleting person:', error);
		}
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