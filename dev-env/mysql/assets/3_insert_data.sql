INSERT INTO member VALUES (1, 'Stefan', 'Fitzi', 'Bowkerst. 9, 8375 Barkly West', 'm', '1970-05-19', '1234567', '23456789');
INSERT INTO member VALUES (2, 'Stephania', 'Bontsi', 'Dahlia St. 245, 8375 Barkly West', 'f', '1989-02-24', '1234568', '23456799');

INSERT INTO event_type VALUES (1, 'Action Team', 'Weekly Action Team program');
INSERT INTO event_type VALUES (2, 'Luvo Ladies', 'Weekly Luvo Ladies program');
INSERT INTO event_type VALUES (3, 'Instrument practice', 'Practice keyboard, guitar, ...');

INSERT INTO user_role VALUES (1, 'Admin');
INSERT INTO user_role VALUES (2, 'User');
INSERT INTO user_role VALUES (3, 'ReadOnly');

INSERT INTO user_credentials VALUES (1, 'stefan.fitzi@bafnpo.org', 'secret', 1);

INSERT INTO baf_event VALUES (1, 'Action Team 05.03.2019', '05.03.2019', 1);
INSERT INTO baf_event VALUES (2, 'Luvo Ladies Week 9', '02.03.2019', 2);