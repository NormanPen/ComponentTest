import { LightningElement, api } from 'lwc';

export default class CalendarButton extends LightningElement {
    @api label = 'Button';
    
    handleClick() {
        // Hier kannst du die Logik für den Klick-Event hinzufügen
        this.dispatchEvent(new CustomEvent('buttonclick'));
    }
}