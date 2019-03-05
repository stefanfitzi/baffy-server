CREATE USER 'bafapp' IDENTIFIED BY 'bafapp';
GRANT SELECT ON bafapp.* TO 'bafapp';
GRANT INSERT ON bafapp.* TO 'bafapp';
GRANT UPDATE ON bafapp.* TO 'bafapp';
GRANT DELETE ON bafapp.* TO 'bafapp';
GRANT EXECUTE ON bafapp.* TO 'bafapp';
FLUSH PRIVILEGES;