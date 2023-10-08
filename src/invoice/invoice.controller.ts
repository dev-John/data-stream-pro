import { Body, Controller, Post } from '@nestjs/common';
// constructor(private readonly invoiceService: InvoiceService) {}

@Controller('invoice')
export class InvoiceController {
  @Post()
  dummyPost(@Body() body: any) {
    return body;
  }
}

// @Post()
// importFile(@Body() body: any) {
//   console.log('controller!!!!!!!!');
//   console.log(
//     '🚀 ~ file: invoice.controller.ts:17 ~ InvoiceController ~ importFile ~ file:',
//     body,
//   );
//   // if (!file) {
//   //   return 'No file provided.';
//   // }

//   // this.invoiceService.importInvoiceFile({ file });

//   return 'File received and processing started.';
// }
