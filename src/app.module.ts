import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './recipebook/users/users.module';
import { RecipebookModule } from './recipebook/recipebook/recipebook.module';
import { RecipesModule } from './recipebook/recipes/recipes.module';
import { CategoriesModule } from './recipebook/categories/categories.module';
import { InstrucctionsModule } from './recipebook/instrucctions/instrucctions.module';
import { IngredientsModule } from './recipebook/ingredients/ingredients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    RecipebookModule,
    RecipesModule,
    CategoriesModule,
    InstrucctionsModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
