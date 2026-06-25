import { MigrationInterface, QueryRunner } from "typeorm";

export class MailColumnDelition1782421259836 implements MigrationInterface {
    name = 'MailColumnDelition1782421259836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

}
