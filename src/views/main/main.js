import { AbstractView } from '../../common/view';

export class MainView extends AbstractView {
	constructor() {
		super();
		this.setTitle('Search Book');
	}

	render() {
		const main = document.createElement('div');
		main.innerHTML = 'TEST';
		this.app.innerHTML = '';
		this.app.append(main);
	}
}
