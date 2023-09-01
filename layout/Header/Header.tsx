
import { HTag } from '../../components';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css'

export const Header = ({ ...props }: HeaderProps) => {
	return (
		<div {...props}>
			<div className={styles.title}>
				<HTag tag='h2'>Injection insulin controller</HTag>
			</div>
		</div>
	)
}