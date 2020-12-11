import {FC} from 'react';
import Link from 'next/link';
import {Button} from '../../UI/Button';

import styles from './styles.module.scss';

const NavBar: FC<any> = (props) => {
	return (
		<div className={styles.navbar}>
			<div className="container">
				<img className={styles.logo} src="/logo.svg" alt="Приозерский страус" />
				<div className={styles.navigation}>
					<div className={styles['navigation-pages']}>
						<Link href="/">
							<a>Главная</a>
						</Link>
						<Link href="/">
							<a>О нас</a>
						</Link>
						<Link href="/">
							<a>Проживание</a>
						</Link>
						<Link href="/">
							<a>Контакты</a>
						</Link>
					</div>
					<div className={styles['navigation-social']}>
						<img src="/assets/socialIcons/youtube.svg" alt="ссылка на канал youtube" />
						<img src="/assets/socialIcons/VK.svg" alt="страница в ВК" />
						<img src="/assets/socialIcons/inst.svg" alt="профиль в instagram" />
					</div>
				</div>
                <div className={styles.button}>
                    <Button />
                </div>
			</div>
		</div>
	);
};

export {NavBar};
