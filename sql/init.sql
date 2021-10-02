    CREATE USER freeezzz WITH PASSWORD '0L/RgNC40LLQtdGC0LzQtdC00LLQtdC0';
    GRANT ALL PRIVILEGES ON DATABASE apptable TO freeezzz;

    SET statement_timeout = 0;
    SET lock_timeout = 0;
    SET idle_in_transaction_session_timeout = 0;
    SET client_encoding = 'UTF8';
    SET standard_conforming_strings = on;
    SELECT pg_catalog.set_config('search_path', '', false);
    SET check_function_bodies = false;
    SET xmloption = content;
    SET client_min_messages = warning;
    SET row_security = off;

    SET default_tablespace = '';

    SET default_table_access_method = heap;

    CREATE TABLE public.form (
        id integer NOT NULL,
        "Name" character varying,
        "Count" integer,
        "Distance" double precision,
        "Date" date
    );


    ALTER TABLE public.form OWNER TO freeezzz;


    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (1, 'Максим
    ', 2, 5.555, '2017-01-21');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (3, 'Петя
    ', 3, 2.312, '2017-01-22');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (4, 'Толя
    ', 3, 3.123, '2017-01-23');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (5, 'Дима', 1, 4.113, '2017-01-24');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (2, 'Вася', 2, 6.112, '2017-01-22');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (6, 'Артем', 4, 9.912, '2017-01-25');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (7, 'Петя
    ', 5, 3.222, '2017-01-21');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (8, 'Борис
    ', 2, 1.133, '2017-01-19');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (9, 'Андрей', 3, 4.132, '2017-01-28');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (10, 'Женя', 1, 0.333, '2017-01-30');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (11, 'Юра', 6, 8.111, '2017-01-31');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (12, 'Максим
    ', 2, 6.666, '2017-01-22');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (13, 'Миша
    ', 2, 5.122, '2017-01-22');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (14, 'Саша
    ', 3, 1.124, '2017-01-23');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (15, 'Сергей
    ', 1, 2.132, '2017-01-24');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (16, 'Слава
    ', 2, 4.135, '2017-01-23');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (17, 'Октав', 3, 5.522, '2017-01-24');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (18, 'Мария', 4, 7.512, '2017-01-25');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (19, 'Алена
    ', 5, 5.012, '2017-01-27');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (21, 'Анна', 6, 3.441, '2017-01-26');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (22, 'Настя', 7, 9.842, '2017-01-28');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (23, 'Гена
    ', 5, 5.121, '2017-01-28');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (24, 'Святослав
    ', 3, 3.232, '2017-01-28');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (25, 'Георгий
    ', 4, 5.967, '2017-01-28');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (26, 'Виктор', 1, 1.111, '2017-01-29');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (27, 'Петя', 7, 7.777, '2017-01-29');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (28, 'Моесей', 8, 4.754, '2017-01-30');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (29, 'Владимир', 3, 2.949, '2017-01-30');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (30, 'Юлия', 5, 5.458, '2017-01-30');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (31, 'Лидия', 6, 6.888, '2017-01-30');
    INSERT INTO public.form (id, "Name", "Count", "Distance", "Date") VALUES (32, 'Дмитрий', 7, 8.868, '2017-01-30');


    ALTER TABLE ONLY public.form
        ADD CONSTRAINT table_pkey PRIMARY KEY (id);