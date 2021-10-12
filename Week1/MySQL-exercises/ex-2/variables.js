
export const query1 = "SELECT name FROM country WHERE population > 8000000";
export const query2 = "SELECT name FROM country WHERE name LIKE '%land%'";
export const query3 = "SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000";
export const query4 = "SELECT name FROM country WHERE Continent = 'Europe' ORDER BY name";
export const query5 = "SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC";
export const query6 = "SELECT name FROM city WHERE CountryCode = 'NLD'";
export const query7 = "SELECT population FROM city WHERE name = 'Rotterdam' ";
export const query8 = "SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10";
export const query9 = "SELECT name FROM city ORDER BY population DESC LIMIT 10";
export const query10 = "SELECT SUM(Population) FROM country";