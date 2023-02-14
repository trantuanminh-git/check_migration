Change something in "user.entity.ts" (change the entity)
run command "npm run migration:generate -- db/migrations/<migration's_name>" (base on configuration command in package.json) => generate a migration at ./db/migrations/, this migration file will automatically generate SQL query corresponding to your changed DB in user.entity.ts
npm run migration:run => run the migration => Your DB will change
npm run migration:revert => revert the migration
see the options in package.json
NOTE: migration:run will update the DB to the lastest change, while migration:revert will revert the DB step by step
