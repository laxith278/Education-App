sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("loanapp.controller.loanApplication", {
        onSubmit() {
            MessageBox.success("You have applied for loan successfully\nYour loan id: 092889123");
            
        },
        onCancel() {
            sap.m.MessageToast.show("Loan application cancelled");
            
        }
    });
});