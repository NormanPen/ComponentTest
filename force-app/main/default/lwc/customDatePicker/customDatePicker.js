import { LightningElement, track } from 'lwc';

export default class CustomDatePicker extends LightningElement {
    @track isOpen = false;

    get computedClass() {
        return `slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click${this.isOpen ? ' slds-is-open' : ''}`;
    }

    handleButtonClick() {
        this.isOpen = !this.isOpen;

        // Custom Event auslösen, um den Status des Datepickers zu aktualisieren
        this.dispatchEvent(new CustomEvent('datepickerstatuschange', { detail: { isOpen: this.isOpen } }));
    }
}
