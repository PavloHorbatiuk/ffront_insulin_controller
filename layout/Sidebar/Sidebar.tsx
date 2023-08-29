
import { SideBarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Link from 'next/link';

export const Sidebar = ({ ...props }: SideBarProps) => {
	return (
		<div {...props} >
			<div className={styles.warper}>
				<Link href={'/form'}>
					Add person
				</Link>
			</div>
		</div>
	)
}