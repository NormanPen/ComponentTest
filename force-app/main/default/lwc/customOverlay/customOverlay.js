import { LightningElement, api } from 'lwc';

export default class CustomOverlay extends LightningElement {
    @api isOpen = false;

    get overlayClass() {
        return `overlay ${this.isOpen ? 'hide' : 'show'}`;
    }
}
