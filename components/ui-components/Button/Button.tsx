import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.css'
import ArrowIcon from './arrow.svg'


export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}

		</button>
	)
}