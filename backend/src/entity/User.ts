import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Index()
  @Column()
  username!: string;

  @Index()
  @Column()
  email!: string;

  @Column("timestamptz")
  @CreateDateColumn()
  created_at!: Date;

  @Column("timestamptz")
  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ default: false })
  is_certified!: boolean;

  @OneToOne((type) => UserProfile)
  @JoinColumn()
  profile!: UserProfile;

  // 해야 할 것
  //generateUserToken : function
}
