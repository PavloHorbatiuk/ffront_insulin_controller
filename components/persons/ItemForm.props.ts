import { Person } from '../../interfaces/interface';

export interface PickFormProps {
	person: Pick<Person, 'name' | 'email' | 'rank'>;
}
