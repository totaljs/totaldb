CREATE TABLE "{0}"."tbl_token" (
	"id" text NOT NULL,
	"name" text,
	"token" text,
	"types" _text,
	"options" jsonb,
	"dtaccess" timestamp,
	"dtcreated" timestamp,
	"dtupdated" timestamp,
	PRIMARY KEY ("id")
);

CREATE TABLE "{0}"."tbl_type" (
	"id" text NOT NULL,
	"category" text,
	"name" text,
	"singular" text,
	"attrs" jsonb,
	"permissions" _text,
	"note" text,
	"columns" int4 DEFAULT 0,
	"color" text,
	"icon" text,
	"sortindex" int2 DEFAULT 0,
	"x" int4 DEFAULT 0,
	"y" int4 DEFAULT 0,
	"options" jsonb,
	"dtcreated" timestamp DEFAULT now(),
	"dtupdated" timestamp,
	PRIMARY KEY ("id")
);