import { MigrationInterface, QueryRunner } from "typeorm";

export class PeopleTable1783113626623 implements MigrationInterface {
    name = 'PeopleTable1783113626623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "names" character varying NOT NULL, "lastNames" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_83b775da14886d352de2a4cac0" UNIQUE ("userId"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_83b775da14886d352de2a4cac01" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_83b775da14886d352de2a4cac01"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
