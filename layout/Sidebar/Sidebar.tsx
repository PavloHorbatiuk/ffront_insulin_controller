
import { SideBarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Link from 'next/link';

export const Sidebar = ({ ...props }: SideBarProps) => {
	return (
		<div {...props} >
			<Link href={'/form'} className={styles.warper}>
				Add person
			</Link>
		</div>
	)
}