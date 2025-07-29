import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
// import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmailService{
    private EmailjsOptions = {
        publicKey: process.env['EMAILJS_PUBLIC_KEY'] || "",
        blockHeadless: true,
        limitRate:{
            id: 'app',
            throttle: 10000
        }
    }
    private serviceId = process.env['EMAILJS_SERVICE_ID'] || "";
    private templateId = process.env['EMAILJS_TEMPLATE_ID'] || "";

    sendEmail = (TemplateData: Record<string, unknown>) => {
        console.log(TemplateData);
        emailjs.send(this.serviceId, this.templateId, TemplateData, this.EmailjsOptions)
        .then((response) => {
                console.log("Success");
                console.log(response);
            },
            (error) => {
                console.log("Failed!!");
                console.log(error);
            }
        );
    }
}