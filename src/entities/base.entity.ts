import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ type: 'boolean', default: true })
    isActive?: boolean;

   

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime?: Date;

    @Column({ type: 'varchar', length: 300,nullable:true })
    createdBy?: string;


    @DeleteDateColumn({ type: 'timestamptz',nullable: true })
    deletedDateTime?: Date;
    
    @Column({ type: 'varchar', length: 300, nullable: true })
    internalComment?: string | null;
} 