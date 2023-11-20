--
-- PostgreSQL database dump
--

-- Dumped from database version 15.5 (Homebrew)
-- Dumped by pg_dump version 15.5 (Homebrew)

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

--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: abhinavap
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE postgres OWNER TO abhinavap;

\connect postgres

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

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: abhinavap
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admi_category; Type: TABLE; Schema: public; Owner: abhinavap
--

CREATE TABLE public.admi_category (
    type character varying(255)
);


ALTER TABLE public.admi_category OWNER TO abhinavap;

--
-- Name: e_grants_category; Type: TABLE; Schema: public; Owner: abhinavap
--

CREATE TABLE public.e_grants_category (
    type character varying(255)
);


ALTER TABLE public.e_grants_category OWNER TO abhinavap;

--
-- Name: gender; Type: TABLE; Schema: public; Owner: abhinavap
--

CREATE TABLE public.gender (
    type character varying(256)
);


ALTER TABLE public.gender OWNER TO abhinavap;

--
-- Name: student; Type: TABLE; Schema: public; Owner: abhinavap
--

CREATE TABLE public.student (
    name character varying(255),
    admi_no character varying(255) NOT NULL,
    mobile_no character varying(255),
    email character varying(255),
    admi_year integer,
    admi_type character varying(255),
    gender character varying(255),
    admi_category character varying(255),
    e_grants_category character varying(255),
    income integer,
    distance integer,
    parent_name character varying(255),
    partent_mobile_no character varying(255)
);


ALTER TABLE public.student OWNER TO abhinavap;

--
-- Data for Name: admi_category; Type: TABLE DATA; Schema: public; Owner: abhinavap
--

COPY public.admi_category (type) FROM stdin;
SC
ST
OEC
PH
BPL
Other
\.


--
-- Data for Name: e_grants_category; Type: TABLE DATA; Schema: public; Owner: abhinavap
--

COPY public.e_grants_category (type) FROM stdin;
\.


--
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: abhinavap
--

COPY public.gender (type) FROM stdin;
Male
Female
Other
abc
\.


--
-- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: abhinavap
--

COPY public.student (name, admi_no, mobile_no, email, admi_year, admi_type, gender, admi_category, e_grants_category, income, distance, parent_name, partent_mobile_no) FROM stdin;
Abhinav A P	21mh129	+916238886820	asok0968@gmail.com	2020	LET	Male	OEC	OEC	888000	998	asokan p	+916238886820
\.


--
-- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: abhinavap
--

ALTER TABLE ONLY public.student
    ADD CONSTRAINT student_pkey PRIMARY KEY (admi_no);


--
-- PostgreSQL database dump complete
--

