<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<RFDAs0Y22?Eg)u[g+=}8oqa)8.9W< v>*SPig:5P,=ueU=ebu*#=~5a9;w}F!O3' );
define( 'SECURE_AUTH_KEY',  'mjb~tC}`w*9S,G/4,~94E&GhC^_<rX]P=VG0IC$?N _q&v_#`s1EtK!vj_-(O`YF' );
define( 'LOGGED_IN_KEY',    '[M6F{60,K)_nOJ&R%y2D7moP9m8>t.p9|4OI%N~?t9F[q_YrbJkeQQ:ndxO{7lb_' );
define( 'NONCE_KEY',        '1B=Wtt,v(oF;PYGNxyTODvZTGb@Z@r^8P=pS_<A1E&DL 3@zM{`mIOs5_3CHV${f' );
define( 'AUTH_SALT',        'yG5rqclLzBJ3gD+}5>l36vNqj9n=^cOxWy|8J}9>|]Cj)YPf1$)tNkko7%^R%)&V' );
define( 'SECURE_AUTH_SALT', '(? X/Y4,$p.O%bn,FSHA9Jc@`D>L{N#f4?b2Jea.&g&fzX+2{$!>cOu;w~=)jJuu' );
define( 'LOGGED_IN_SALT',   'Cqy&Ks/j|>gE+mSO%][129 oM7rj@$h)[zX3_AZFOcvU6d,RD,S-+Y[{!m(jrK}k' );
define( 'NONCE_SALT',       'Y%Ras!HWZ :JPUgDCm:ZL3>%)EHNRnVZQCA*c)H>5&C)q[[OY i}_M$NUQj3C#_E' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
