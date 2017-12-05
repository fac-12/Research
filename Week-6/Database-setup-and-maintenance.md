* # Database setup and maintenance

## What is a build script and why do you need one? (think ahead to how this might come in useful when working on a project this week)

#### What is a script?


A SQL script is a set of SQL commands saved as a file in SQL Scripts. A SQL script can contain one or more SQL statements or SQL blocks. You can use SQL Scripts to create, edit, view, run, and delete script files.

Build script is a script that creates tables and populates data into those database tables.

## What is database migration?

Data migration is the process of transporting data between computers, storage devices or formats. It is a key consideration for any system implementation, upgrade or consolidation. During data migration, software programs or scripts are used to map system data for automated migration.

Automated data migration minimizes human intervention and application downtime and enhances migration speed. Migration documentation facilitates tracking and reduces future migration costs and risks.

Database migrations could cover the following:

* Schema Migrations
Upgrading (or potentially rolling back) an application and database schema version for each new version of app deployed.

* Server Migrations
Moving your database from 1 server to another, i.e. AWS RDS instead of Heroku. Typically you keep the same PostgreSQL version and use replication to reduce downtime.

* Version Migration
Upgrading from one major version of PostgreSQL to another – say from 9.3 to 9.6 or 10 requires an upgrade of the database catalog.

* DBMS Migration (less relevant for us)
Switching from MySQL or Oracle to PostgreSQL.

Reference [What is a database migration](https://www.openscg.com/2017/08/what-is-a-database-migration/)




## Create a build script for a simple database (one or two tables only), which you can run locally. Check that it works for you and everyone on your team



## Further Reading
[Interesting article about migrating database to AWS, some good general advice about what to think about (although obviously AWS focused)](https://aws.amazon.com/blogs/database/database-migration-what-do-you-need-to-know-before-you-start/)