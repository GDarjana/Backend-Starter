import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OrderCreateDto } from '../dto/order-create-dto';
import { OrderUpdateShippingAddressDto } from '../dto/order-update-shipping-address-dto';
import { OrderUpdateInvoiceAddressDto } from '../dto/order-update-invoice-address-dto';

@Entity()
export class Order {
  static OrderStatus = {
    InCart: 'In Cart',
    Shipped: 'Shipped',
    Paid: 'Paid',
    Invoiced: 'Invoiced',
  };

  constructor(orderCreateDto?: OrderCreateDto) {
    if (orderCreateDto) {
      if (orderCreateDto.items.length > 3) {
        throw new Error('Wow 3 produits ca fait un peu beaucoup la non');
      }
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.customer = orderCreateDto.customer;
      this.items = orderCreateDto.items;
      this.status = Order.OrderStatus.InCart;
      this.total = 10 * orderCreateDto.items.length;
      this.paidAt = null;
      this.shippingAddress = null;
      this.shippingMethod = null;
      this.invoiceAddress = null;
      this.shippingMethodSetAt = null;
      this.invoiceAddressSetAt = null;
    }
  }

  payOrder() {
    this.status = 'Paid';
    this.updatedAt = new Date();
    this.paidAt = new Date();
  }

  updateShippingAddress(
    OrderUpdateShippingAddressDto: OrderUpdateShippingAddressDto,
  ) {
    this.shippingAddress = OrderUpdateShippingAddressDto.shippingAddress;
    this.shippingMethod = OrderUpdateShippingAddressDto.shippingMethod;
    this.shippingMethodSetAt = new Date();
    if (!this.invoiceAddress) {
      this.invoiceAddress = this.shippingAddress;
      this.invoiceAddressSetAt = new Date();
    }
    this.updatedAt = new Date();
    this.status = Order.OrderStatus.Shipped;
  }

  updateInvoiceAddress(
    OrderUpdateInvoiceAddressDto: OrderUpdateInvoiceAddressDto,
  ) {
    this.invoiceAddress = OrderUpdateInvoiceAddressDto.invoiceAddress;
    this.invoiceAddressSetAt = new Date();
    this.updatedAt = new Date();
    this.status = Order.OrderStatus.Invoiced;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  createdAt: Date;
  updatedAt: Date;

  @Column({ type: 'varchar' })
  customer: string;

  @Column({ type: 'json' })
  items: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'int' })
  total: number;

  @Column({ type: 'date', nullable: true })
  paidAt: Date;

  @Column({ type: 'varchar', nullable: true })
  shippingAddress: string;

  @Column({ type: 'varchar', nullable: true })
  shippingMethod: string;

  @Column({ type: 'varchar', nullable: true })
  invoiceAddress: string;

  @Column({ type: 'date', nullable: true })
  shippingMethodSetAt: Date;

  @Column({ type: 'date', nullable: true })
  invoiceAddressSetAt: Date;
}
