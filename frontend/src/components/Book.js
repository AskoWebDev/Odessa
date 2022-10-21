import React, {useState, useEffect} from 'react';
import Cont from './Book.module.scss';
import Bok from './Book.module.scss';
import Price from './Book.module.scss';
import Digit from './Book.module.scss';
import Button from './Book.module.scss';
import Available from './Book.module.scss';
import How from './Book.module.scss';
import Read from './Book.module.scss';
import Char from './Book.module.scss';
import Main from './Book.module.scss';
import Dots from './Book.module.scss';
import First from './Book.module.scss';

function Book() {
	const [count, setCount] = useState(1)
	const [toggle, setToggle] = useState(false)
	const [showText, setShowText] = useState('развернуть описание')

	// a function that is watching on toggle change
	// and sets button text
	useEffect(() => {
		if (toggle) {
			setShowText('свернуть описание')
		} else {
			setShowText('развернуть описание')
		}
	}, [toggle])
	
	const show = {
		display: toggle ? 'inline' : 'none'
	};

	useEffect(() => {
		if (count < 1) {
			setCount(1)
		}
	}, [count])

	
	return(
		<div className={First.div}>
			<div className={Cont.container}>
				<div className={Bok.book}>
					<h1>Книга "Старая Одесса" Александр Де-Рибасс</h1>
					<img src="../static/images/o-810x1080.jpg" />
				</div>

				<div className={Price.block}>

					<p className={Digit.number}>13 250</p>
					<p className={Available.text}>Есть в наличии</p>

					<div className={How.many}>
						<p>Штук:</p>
						<button type="submit" onClick={() => {setCount(count + 1)}}>+</button>
						<p>{count}</p>
						<button type="submit" onClick={() => {setCount(count - 1)}}>-</button>
					</div>

					<button className={Button.btn}>Купить</button>

				</div>
			</div>
			<div className={Main.cont}>
				
				<div className={Read.description}>
					<h1>Описание</h1><br />
					<div>Подарочная книга "Старая Одесса" Александр Де-Рибасс<br /><br />
					
						Подарочная книга станет незабываемым подарком для всех почитателей истории и города Одесса.<br /><br />

						Данная подарочная книга оформлена в переплет из натуральной высококачественной кожи ручной работы. Торцевая сторона книги украшена красивой медной накладкой, которая покрыта серебром, а также, по всему периметру, книга украшена золотым тиснением. На книге имеются декорации художественной ювелирной эмалью. С боковой части книги есть цветной срез. Книги укомплектованы твёрдым кожаным футляром, который также украшен золотым тиснением.<br /><br />

						Автор книги всю свою жизнь увлеченно и преданно занимался историей родной Одессы и оставил нам в наследство серию очерков, объединив некоторые из них в книгу "Старая Одесса".<br /><br />

						Автор описывает улицы и дома города, известных одесситов и простых горожан, их привычки и нравы.<br /><br />

	
						<span id="hide" style={show}>
							В книге есть такие главы:<br /><br />
							<ul>
							    <li>Взятие Хаджибея</li><br /><br />
							    <li>Еще об основании Одессы 22 августа 1794 г.</li><br /><br />
							    <li>Де-Рибас, Де-Волан, Ришелье и Ланжерон</li><br /><br />
							    <li>Дерибасовский сад</li><br /><br />
							    <li>Дача герцога Ришелье — Дюковский сад</li><br /><br />
							    <li>Черты интимной жизни Ришелье</li><br /><br />
							    <li>Пушкин и Амалия Ризнич</li><br /><br />
							    <li>Театральные воспоминания</li><br /><br />
							    <li>Танцующая Одесса</li><br /><br />
							    <li>Пожар театра</li><br /><br />
							    <li>На Чумной горе</li><br /><br />
							    <li>Илья Ильич Мечников и его одесские друзья</li><br /><br />
							    <li>Винные погреба</li><br /><br />
							    <li>Прежние люди, прежние нравы</li><br /><br />
							    <li>Старые портреты</li><br /><br />

								Репринт издания 1913 года.<br /><br />
							</ul>
						</span>

						{/* show or hide button */}
						<button type='submit' onClick={() => {setToggle(prev => !prev)}}>{showText}</button>

					</div>
				</div>
				<div className={Char.characteristics}>
					<h1>Характкристика</h1>
					<div>
						<p className={Dots.firstp}>Код товара</p><p>0302002036</p>
					</div>
					<div>
						<p className={Dots.firstp}>Производитель</p><p>Мир книг</p>
					</div>
					<div>
						<p className={Dots.firstp}>Страна производства</p><p>Украина</p>
					</div>
					<div>
						<p className={Dots.firstp}>Тип</p><p>Книга</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Book;