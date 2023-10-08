import { Injectable } from '@nestjs/common';
import { ImportFileDto } from './dtos/importFile.dto';

@Injectable()
export class InvoiceService {
  // constructor() {} // @InjectRepository(Invoice)

  importInvoiceFile({ file }: ImportFileDto) {
    console.log(file);
    //   const rowObservable = FileAssembler.assembleFile({ file });

    //   rowObservable.subscribe({
    //     next: (row) => {
    //       console.log(row);
    //     },
    //     error: (error) => {
    //       // Handle errors
    //       console.error('Error reading file:', error);
    //     },
    //     complete: () => {
    //       // Complete handling (optional)
    //       console.log('File reading complete.');
    //     },
    //   });

    //   // const invoice = new Invoice();
    //   // return this.invoiceRepository.inser importFileRepository.importFile();
  }
}
