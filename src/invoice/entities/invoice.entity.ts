import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  invoiceNumber: number;

  @Column()
  invoiceDate: Date;

  @Column()
  dueDate: Date;

  @Column()
  customerId: number;

  @Column()
  customerName: string;

  @Column()
  customerEmail: string;

  @Column()
  customerCountry: string;

  @Column()
  invoiceTotal: number;

  @Column()
  currency: string;

  @Column()
  paymentStatus: string;

  @Column()
  paymentDate: Date;

  @Column()
  paymentMethod: string;

  @Column()
  notes: string;
}
