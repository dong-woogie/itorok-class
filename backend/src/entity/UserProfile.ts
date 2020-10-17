import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";

@Entity()
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  display_name!: string;

  @Column({ length: 255, nullable: true, type: "varchar" })
  thumbnail!: string | null;

  @Column({ length: 255 })
  short_bio!: string;

  @Column("text")
  about!: string;

  @Column("timestamptz")
  @CreateDateColumn()
  created_at!: Date;

  @Column("timestamptz")
  @UpdateDateColumn()
  updated_at!: Date;

  @OneToOne((type) => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "fk_user_id" })
  user!: User;

  @Column("uuid")
  fk_user_id!: string;
}
