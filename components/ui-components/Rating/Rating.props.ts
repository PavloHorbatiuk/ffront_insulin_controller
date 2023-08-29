import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditAble?: boolean;
	rating: number;
	setRating: () => void;
}
