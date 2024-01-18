// sheets.js
import { LightningElement, track } from 'lwc';

export default class Sheets extends LightningElement {
    @track isSheetOpen = true; // Initial state
    @track isOverlayOpen = false; // Initial state for the overlay

    get sheetButtonClass() {
        return this.isSheetOpen ? 'active' : 'is-inactive';
    }

    get testButtonClass() {
        return this.isSheetOpen ? 'is-inactive' : 'active';
    }

    get overlayButtonClass() {
        return this.isOverlayOpen ? 'active' : 'is-inactive';
    }

    handleSheetButtonClick() {
        this.isSheetOpen = true;
        this.isOverlayOpen = false; // Ensure overlay is closed when sheet is opened
    }

    handleTestButtonClick() {
        this.isSheetOpen = false;
        this.isOverlayOpen = false; // Ensure overlay is closed when sheet is closed
    }

    handleOverlayButtonClick() {
        this.isOverlayOpen = !this.isOverlayOpen; // Toggle overlay state
    }
}
