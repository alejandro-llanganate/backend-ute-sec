import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";


async function bootstrap(){
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('UTE-SEC')
    .setDescription('API del proyecto de seguridad de Ivonne Venegas')
    .setVersion('1.0')
    .addTag('api')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}

bootstrap();