import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<div className={cn(className, styles.footer)} {...props}>
			PashaTop © 2020 - {format(new Date(), 'yyyy')}, Всі права захищені
		</div>
	)
}