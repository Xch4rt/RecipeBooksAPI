import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { GetUser } from './decorator';
import { JwtGuard } from './guard/jwt.guard';

@ApiTags('auth')
@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({
    status: 201,
    description: 'El usuario se ha creado correctamente',
  })
  @ApiResponse({ status: 403, description: 'Credenciales incorrectas' })
  @Post('register')
  signup(@Body() dto: AuthDto) {
    return this.authService.register(dto);
  }

  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({
    status: 200,
    description: 'El usuario se ha logeado correctamente',
  })
  @ApiResponse({ status: 403, description: 'Credenciales incorrectas' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signin(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @ApiResponse({ status: 401, description: 'El usuario no se ha autenticado' })
  @ApiResponse({
    status: 200,
    description: 'La información del usuario se ha obtenido correctamente',
  })
  @UseGuards(JwtGuard)
  @Get('/')
  getCurrentUser(@GetUser('id') userId) {
    return this.authService.getInfo(userId);
  }
}
