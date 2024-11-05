import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './inteceptors/auth-interceptor.service';
import { provideStore } from '@ngrx/store';
import { increaseCounter } from './store/counter/counter.action';
import { counterReducer } from './store/counter/counter.reducer';
import { languageReducer } from './store/Language/language.reducer';
import { provideEffects } from '@ngrx/effects';
import { LanguageEffect } from './store/Language/language.effect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideStore({
        counter: counterReducer,
        language: languageReducer
    }),
     provideEffects([LanguageEffect])]
};


//we called provideHttpClient(withFetch()) here to use it globally -- now i am ready to create api calls
