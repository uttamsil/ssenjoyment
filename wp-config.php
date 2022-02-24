<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ssenjoyment' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'V867RAy7Kg/*PLDdTq^D3SM(v6^B }-mKLe0@F7gr3NSgkv8305ME G3}{6vGf/P' );
define( 'SECURE_AUTH_KEY',  '~sT&z8LPgNat#roHL*3?WqAbc*Gh1iy6JAiOSK1LMI#rJx5nuGVPe6K9~5|b@.!;' );
define( 'LOGGED_IN_KEY',    '9dIg=Ip[I5;j61<]@ZO#A%a3z=hWj}n7G(fTsW~y)[*,b:D@%%3^O3O#]BT>h[qz' );
define( 'NONCE_KEY',        'u*q?rTq@&$FOOc7or7X8a/dUbpq.P3lh3zD57x0A/K[8@4@n`_fh,!VEj#QaygZi' );
define( 'AUTH_SALT',        'l;*mMGVauTS.:9f{DsaI_1oOE/#_9?b?w.TG< cH@WUd77-9D6jci:u-$ux*sof)' );
define( 'SECURE_AUTH_SALT', '=N9F1[zG>1fB)Jdci8kaW(eP)fUI=HT7]uU/4;N.T_Y==]>16]7QZ=@ cYtOuLWr' );
define( 'LOGGED_IN_SALT',   'g3@wb%4ZVesb_`Pt=yV+=?>^Is5&8>Z]GREiYkyy!)U#i:ijN.D0MHF440tk9uH;' );
define( 'NONCE_SALT',       'G$`M0t*}fb#:Z$6d$R(UYw6~X4,h:d}=l6dOt4U@zuqS<F*0o5?otH, 1MN)dUiP' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
