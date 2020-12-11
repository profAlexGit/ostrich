import {FC} from 'react';

import styles from './styles.module.css';

const Button: FC<any> = (props) => {
	const {label} = props;

	return <button className={styles.button}>Обратный&nbsp;звонок</button>;
};

export {Button};
