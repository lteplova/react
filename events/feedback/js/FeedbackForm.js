/******************************
 * Ваша реализация компонента
 *****************************/

const FeedbackForm = ({ data, onSubmit }) => {
	function onChange(event) {
		data.onChange(event.target.value);
	}
  
  //let salutationEl, nameEl, emailEl, subjectEl, messageEl, snacksEl;
  
  return (
		<form class="content__form contact-form">
			<div class="testing">
				<p>Чем мы можем помочь?</p>
			</div>
			<div className="contact-form__input-group">
				<input
					className="contact-form__input contact-form__input--radio"
					onChange={onChange}
					id="salutation-mr"
					name="salutation"
					type="radio"
					value="Мистер"
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">
					Мистер
				</label>
				<input
					className="contact-form__input contact-form__input--radio"
					onChange={onChange}
					id="salutation-mrs"
					name="salutation"
					type="radio"
					value="Мисис"
					defaultChecked
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">
					Мисис
				</label>
				<input
					className="contact-form__input contact-form__input--radio"
					onChange={onChange}
					id="salutation-ms"
					name="salutation"
					type="radio"
					value="Мис"
				/>
				<label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">
					Мис
				</label>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="name">
					Имя
				</label>
				<input
					className="contact-form__input contact-form__input--text"
					onChange={onChange}
					id="name"
					name="name"
					type="text"
					defaultValue={data.name}
				/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="email">
					Адрес электронной почты
				</label>
				<input
					className="contact-form__input contact-form__input--email"
					onChange={onChange}
					id="email"
					name="email"
					type="email"
					defaultValue={data.email}
				/>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="subject">
					Чем мы можем помочь?
				</label>
				<select
					className="contact-form__input contact-form__input--select"
					onChange={onChange}
					defaultValue={1}
					id="subject"
					name="subject"
				>
					<option value="0">У меня проблема</option>
					<option value="1">У меня важный вопрос</option>
				</select>
			</div>
			<div className="contact-form__input-group">
				<label className="contact-form__label" htmlFor="message">
					Ваше сообщение
				</label>
				<textarea
					className="contact-form__input contact-form__input--textarea"
					onChange={onChange}
					defaultValue={data.message}
					id="message"
					name="message"
					rows="6"
					cols="65"
				/>
			</div>
			<div className="contact-form__input-group">
				<p className="contact-form__label--checkbox-group">Хочу получить:</p>
				<input
					className="contact-form__input contact-form__input--checkbox"
					onChange={onChange}
					id="snacks-pizza"
					name="snacks"
					type="checkbox"
					value="пицца"
				/>
				<label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">
					Пиццу
				</label>
				<input
					className="contact-form__input contact-form__input--checkbox"
					onChange={onChange}
					id="snacks-cake"
					name="snacks"
					type="checkbox"
					defaultChecked
					value="пирог"
				/>
				<label clclassNameass="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">
					Пирог
				</label>
			</div>
			<button className="contact-form__button" onSubmit={onSubmit} type="submit">
				Отправить сообщение!
			</button>
			<output id="result" />
		</form>
	);

	//   const saveForm = (event) => {
	//     event.preventDefault();
	//     const salutationEl = formEls.querySelector('input[type=radio]:checked');
	//     const snacksEl = formEls.querySelector('input[type=checkbox]:checked');
	//     let result = {
	//       salutation: salutationEl.value,
	//       name: nameEl.value,
	//       subject: subjectEl.value,
	//       message: messageEl.value,
	//       email: emailEl.value,
	//       snacks: snacksEl.value
	//     }
	//     console.log(result);

	//   }
};

/******************************
 * Не вносить изменния ниже
 ******************************/
const form = {
	salutation: 'Мисис',
	name: 'Алевтина',
	subject: 'У меня важный вопрос',
	message: 'Как оформить доставку?',
	email: 'mis@test.co',
	snacks: ['пирог'],
};

function App() {
	let output;
	return (
		<section className="content">
			<h1 className="content__heading">Отправить нам сообщение</h1>
			<p className="content__lede">Используйте эту простую форму чтобы связаться с нами.</p>
			<FeedbackForm data={form} onSubmit={data => (output.value = data)} />
			<output ref={field => (output = field)} />
		</section>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
