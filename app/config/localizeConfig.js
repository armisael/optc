angular.module('app')
	.config(function ($translateProvider) {
		$translateProvider.translations('en', {
			NAV_TURTLE: 'Turtle Time',
			NAV_BARREL: 'Barrel Breaking',
			NAV_EVENT: 'Event',
			NAV_CONTACT: 'Contact Me',
			NAV_SETTINGS: 'Settings',
			TT_TITLE: 'Turtle Time Calculator',
			TT_DIGIT: '6th ID digit:',
			TT_FORMAT: '24hr format',
			TT_TIMEZONE: 'Time Zone:',
			TT_SEEMORE: 'See More',
			TT_ADD_CALENDAR: 'Add to Calendar',
			TT_NOTIFICATION: 'Notification Settings',
			TT_NOTIF_MINUTES: 'Minutes before event',
			TT_NOTIF_SOUND: 'Play sound',
			TT_NOTIF_EXAMPLE: 'Example',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Time till next rotation:',
			BB_ALT: 'Show Hours',
			BB_DATE: 'Date',
			BB_WOODEN: 'Wooden',
			BB_SILVER: 'Silver',
			BB_GOLD: 'Gold'
		})
		.translations('de', {
			NAV_TURTLE: 'Turtle Zeiten',
			NAV_BARREL: 'Friend Game',
			NAV_EVENT: 'Ereignis',
			NAV_CONTACT: 'Kontaktiere Mich',
			NAV_SETTINGS: 'Einstellungen',
			TT_TITLE: 'Turtle Zeiten Rechner',
			TT_DIGIT: '6te Ziffer der ID:',
			TT_FORMAT: '24-Stunden Format',
			TT_TIMEZONE: 'Zeitzone:',
			TT_SEEMORE: 'siehe mehr',
			TT_ADD_CALENDAR: 'Zum Kalender hinzufügen',
			TT_NOTIFICATION: 'Mitteilungeinstellungen',
			TT_NOTIF_MINUTES: 'Minuten vor der Veranstaltung',
			TT_NOTIF_SOUND: 'Ton abspielen',
			TT_NOTIF_EXAMPLE: 'Beispiel',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Zeit bis zum nächsten Wechsel:',
			BB_ALT: 'Anzeige Stunden',
			BB_DATE: 'Datum',
			BB_WOODEN: 'Holz',
			BB_SILVER: 'Silber',
			BB_GOLD: 'Gold'
		})
		.translations('es', {
			NAV_TURTLE: 'Horario Tortugas',
			NAV_BARREL: 'Friend Game',
			NAV_EVENT: 'Evento',
			NAV_CONTACT: 'Contáctame',
			NAV_SETTINGS: 'Configuración',
			TT_TITLE: 'Horario Tortugas Calculadora',
			TT_DIGIT: '6th dígito de ID:',
			TT_FORMAT: '24 horas',
			TT_TIMEZONE: 'Zona Horaria:',
			TT_SEEMORE: 'ver más',
			TT_ADD_CALENDAR: 'Añadir al calendario',
			TT_NOTIFICATION: 'Configuración De Las Notificaciones',
			TT_NOTIF_MINUTES: 'Minutos antes de evento',
			TT_NOTIF_SOUND: 'Reproducir sonido',
			TT_NOTIF_EXAMPLE: 'Ejemplo',
			BB_TITLE: 'Friend Game',
			BB_TIME: 'Tiempo hasta la próxima rotación:',
			BB_ALT: 'Mostrar las horas',
			BB_DATE: 'Fecha',
			BB_WOODEN: 'Madera',
			BB_SILVER: 'Plata',
			BB_GOLD: 'Oro'
		});
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escaped');
	});
