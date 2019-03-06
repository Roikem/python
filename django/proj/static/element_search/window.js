var element_list = [
	"H", "Hydrogen",
	"He", "Helium",
	"Li", "Lithium",
	"Be", "Beryllium",
	"B", "Boron",
	"C", "Carbon",
	"N", "Nitrogen",
	"O", "Oxygen",
	"F", "Fluorine",
	"Ne", "Neon",
	"Na", "Sodium",
	"Mg", "Magnesium",
	"Al", "Aluminium",
	"Si", "Silicon",
	"P", "Phosphorus",
	"S", "Sulfur",
	"Cl", "Chlorine",
	"Ar", "Argon",
	"K", "Potassium",
	"Ca", "Calcium",
	"Sc", "Scandium",
	"Ti", "Titanium",
	"V", "Vanadium",
	"Cr", "Chromium",
	"Mn", "Manganese",
	"Fe", "Iron",
	"Co", "Cobalt",
	"Ni", "Nickel",
	"Cu", "Copper",
	"Zn", "Zinc",
	"Ga", "Gallium",
	"Ge", "Germanium",
	"As", "Arsenic",
	"Se", "Selenium",
	"Br", "Bromine",
	"Kr", "Krypton",
	"Rb", "Rubidium",
	"Sr", "Strontium",
	"Y", "Yttrium",
	"Zr", "Zirconium",
	"Nb", "Niobium",
	"Mo", "Molybdenum",
	"Tc", "Technetium",
	"Ru", "Ruthenium",
	"Rh", "Rhodium",
	"Pd", "Palladium",
	"Ag", "Silver",
	"Cd", "Cadmium",
	"In", "Indium",
	"Sn", "Tin",
	"Sb", "Antimony",
	"Te", "Tellurium",
	"I", "Iodine",
	"Xe", "Xenon",
	"Cs", "Caesium",
	"Ba", "Barium",
	"La", "Lanthanum",
	"Ce", "Cerium",
	"Pr", "Praseodymium",
	"Nd", "Neodymium",
	"Pm", "Promethium",
	"Sm", "Samarium",
	"Eu", "Europium",
	"Gd", "Gadolinium",
	"Tb", "Terbium",
	"Dy", "Dysprosium",
	"Ho", "Holmium",
	"Er", "Erbium",
	"Tm", "Thulium",
	"Yb", "Ytterbium",
	"Lu", "Lutetium",
	"Hf", "Hafnium",
	"Ta", "Tantalum",
	"W", "Tungsten",
	"Re", "Rhenium",
	"Os", "Osmium",
	"Ir", "Iridium",
	"Pt", "Platinum",
	"Au", "Gold",
	"Hg", "Mercury",
	"Tl", "Thallium",
	"Pb", "Lead",
	"Bi", "Bismuth",
	"Po", "Polonium",
	"At", "Astatine",
	"Rn", "Radon",
	"Fr", "Francium",
	"Ra", "Radium",
	"Ac", "Actinium",
	"Th", "Thorium",
	"Pa", "Protactinium",
	"U", "Uranium",
	"Np", "Neptunium",
	"Pu", "Plutonium",
	"Am", "Americium",
	"Cm", "Curium",
	"Bk", "Berkelium",
	"Cf", "Californium",
	"Es", "Einsteinium",
	"Fm", "Fermium",
	"Md", "Mendelevium",
	"No", "Nobelium",
	"Lr", "Lawrencium",
	"Rf", "Rutherfordium",
	"Db", "Dubnium",
	"Sg", "Seaborgium",
	"Bh", "Bohrium",
	"Hs", "Hassium",
	"Mt", "Meitnerium",
	"Ds", "Darmstadtium",
	"Rg", "Roentgenium",
	"Cn", "Copernicium",
	"Nh", "Nihonium",
	"Fl", "Flerovium",
	"Mc", "Moscovium",
	"Lv", "Livermorium",
	"Ts", "Tennessine",
	"Og", "Oganesson",
];

var activitvatom_list = [
' Ac-225 ',' 89 ',' (alpha) ; Fr-221 ; 100 ',' Qalpha ; 5935.1 ',' (B-) ; Ra-225 ; 100 ',' 864E3 ; 9E3 ', ' Ac-227 ',' 89 ',' (B-) ; Th-227 ; 98.62 ; (alpha) ; Fr-223 ; 1.38 ',' Q- ; 44.8 ; Qalpha ; 5042.19 ',' (alpha) ; Pa-231 ; 100 ',' 687.06E6 ; 0.09E6 ', ' Ac-228 ',' 89 ',' (B-) ; Th-228 ; 100 ; (alpha) ; Fr-224 ; 0.0000055 ',' Q- ; 2123.8 ; Qalpha ; 4814 ',' (B-) ; Ra-228 ; 100 ',' 22.14E3 ; 0.11E3 ', ' Ag-108 ',' 47 ',' (B+, EC) ; Pd-108 ; 2.47 ; (B-) ; Cd-108 ; 97.53 ',' Q+ ; 1922 ; Q- ; 1649 ',' (I.T.) ; Ag-108m ; 9.1 ',' 142.9 ; 0.7 ', ' Ag-108m ',' 47 ',' (EC) ; Pd-108 ; 90.9 ; (I.T.) ; Ag-108 ; 9.1 ',' Q+ ; 2031 ; QIT ; 109.44 ','暂无',' 13.82E9 ; 0.28E9 ', ' Ag-110 ',' 47 ',' (EC) ; Pd-110 ; 0.3 ; (B-) ; Cd-110 ; 99.7 ',' Q+ ; 892 ; Q- ; 2892.2 ',' (I.T.) ; Ag-110m ; 1.36 ',' 24.56 ; 0.11 ', ' Ag-110m ',' 47 ',' (I.T.) ; Ag-110 ; 1.36 ; (B-) ; Cd-110 ; 98.64 ',' QIT ; 117.59 ; Q- ; 3009.8 ','暂无',' 21.5810E6 ; 0.0017E6 ', ' Al-26 ',' 13 ',' (B+, EC) ; Mg-26 ; 100 ',' Q+ ; 4004.19 ','暂无',' 22.6E12 ; 0.8E12 ', ' Am-241 ',' 95 ',' (alpha) ; Np-237 ; 100 ',' Qalpha ; 5637.82 ',' (B-) ; Pu-241 ; 99.99756 ',' 13.652E9 ; 0.019E9 ', ' Am-242 ',' 95 ',' (EC) ; Pu-242 ; 16.9 ; (B-) ; Cm-242 ; 83.1 ',' Q+ ; 751.3 ; Q- ; 664.5 ',' (I.T.) ; Am-242m ; 99.54 ',' 57.64E3 ; 0.07E3 ', ' Am-242m ',' 95 ',' (I.T.) ; Am-242 ; 99.54 ; (alpha) ; Np-238 ; 0.46 ',' QIT ; 48.6 ; Qalpha ; 5637.1 ','暂无',' 4.51E9 ; 0.06E9 ', ' Am-243 ',' 95 ',' (alpha) ; Np-239 ; 100 ',' Qalpha ; 5438.8 ',' (B+, EC) ; Cm-243 ; 0.29 ; (B-) ; Pu-243 ; 100 ',' 232.5E9 ; 0.7E9 ', ' Am-244 ',' 95 ',' (B-) ; Cm-244 ; 100 ',' Q- ; 1427.3 ','暂无',' 36.36E3 ; 0.36E3 ', ' Am-244m ',' 95 ',' (EC) ; Pu-244 ; 0.036 ; (B-) ; Cm-244 ; 99.964 ',' Q+ ; 164 ; Q- ; 1516 ','暂无',' 1.56E3 ; 0.18E3 ', ' Ar-37 ',' 18 ',' (EC) ; Cl-37 ; 100 ',' Q+ ; 813.87 ','暂无',' 3.0249E6 ; 0.0017E6 ', ' Ar-41 ',' 18 ',' (B-) ; K-41 ; 100 ',' Q- ; 2491.6 ','暂无',' 6.5765E3 ; 0.0022E3 ', ' At-211 ',' 85 ',' (EC) ; Po-211 ; 58.22 ; (alpha) ; Bi-207 ; 41.78 ',' Q+ ; 785.4 ; Qalpha ; 5982.4 ','暂无',' 25.978E3 ; 0.025E3 ', ' At-215 ',' 85 ',' (alpha) ; Bi-211 ; 100 ',' Qalpha ; 8178 ',' (B-) ; Po-215 ; 0.00023 ',' 100E-6 ; 20E-6 ', ' At-217 ',' 85 ',' (B-) ; Rn-217 ; 0.0067 ; (alpha) ; Bi-213 ; 99.9933 ',' Q- ; 737 ; Qalpha ; 7201.3 ',' (alpha) ; Fr-221 ; 99.9952 ',' 32.30E-3 ; 0.40E-3 ', ' At-218 ',' 85 ',' (B-) ; Rn-218 ; 0.1 ; (alpha) ; Bi-214 ; 99.9 ',' Q- ; 2881 ; Qalpha ; 6874 ',' (B-) ; Po-218 ; 0.022 ',' 1.4 ; 0.2 ', ' At-219 ',' 85 ',' (B-) ; Rn-219 ; 3 ; (alpha) ; Bi-215 ; 97 ',' Q- ; 1566 ; Qalpha ; 6324 ',' (alpha) ; Fr-223 ; 0.02 ',' 56 ; 4 ', ' Au-195 ',' 79 ',' (EC) ; Pt-195 ; 100 ',' Q+ ; 226.8 ','暂无',' 15.96E6 ; 0.12E6 ', ' Au-198 ',' 79 ',' (B-) ; Hg-198 ; 100 ',' Q- ; 1372.8 ','暂无',' 232.788E3 ; 0.026E3 ', ' Ba-133 ',' 56 ',' (EC) ; Cs-133 ; 100 ',' Q+ ; 517.3 ','暂无',' 332.58E6 ; 0.19E6 ', ' Ba-137m ',' 56 ',' (I.T.) ; Ba-137 ; 100 ',' QIT ; 661.659 ','暂无',' 153.12 ; 0.06 ', ' Ba-140 ',' 56 ',' (B-) ; La-140 ; 100 ',' Q- ; 1048 ',' (B-) ; Cs-140 ; 100 ',' 1.10186E6 ; 0.00043E6 ', ' Be-7 ',' 4 ',' (EC) ; Li-7 ; 100 ',' Q+ ; 861.815 ','暂无',' 4.598E6 ; 0.005E6 ', ' Bi-207 ',' 83 ',' (B+, EC) ; Pb-207 ; 100 ',' Q+ ; 2397.5 ',' (alpha) ; At-211 ; 41.78 ',' 1.038E9 ; 0.044E9 ', ' Bi-210 ',' 83 ',' (B-) ; Po-210 ; 99.99986 ; (alpha) ; Tl-206 ; 0.00014 ',' Q- ; 1161.2 ; Qalpha ; 5036.5 ',' (B-) ; Pb-210 ; 100 ',' 432.95E3 ; 0.43E3 ', ' Bi-211 ',' 83 ',' (B-) ; Po-211 ; 0.276 ; (alpha) ; Tl-207 ; 99.724 ',' Q- ; 574 ; Qalpha ; 6750.33 ',' (B-) ; Pb-211 ; 100 ; (alpha) ; At-215 ; 100 ',' 129.0 ; 1.2 ', ' Bi-212 ',' 83 ',' (B-) ; Po-212 ; 64.07 ; (alpha) ; Tl-208 ; 35.93 ',' Q- ; 2252.1 ; Qalpha ; 6207.26 ',' (B-) ; Pb-212 ; 100 ',' 3.6324E3 ; 0.0036E3 ', ' Bi-213 ',' 83 ',' (B-) ; Po-213 ; 97.91 ; (alpha) ; Tl-209 ; 2.09 ',' Q- ; 1423 ; Qalpha ; 5983 ',' (alpha) ; At-217 ; 99.9933 ',' 2.7354E3 ; 0.0036E3 ', ' Bi-214 ',' 83 ',' (B-) ; Po-214 ; 99.979 ; (alpha) ; Tl-210 ; 0.021 ',' Q- ; 3270 ; Qalpha ; 5621 ',' (B-) ; Pb-214 ; 100 ; (alpha) ; At-218 ; 99.9 ',' 1.188E3 ; 0.006E3 ', ' Bi-215 ',' 83 ',' (B-) ; Po-215 ; 100 ',' Q- ; 2189 ',' (alpha) ; At-219 ; 97 ',' 456 ; 12 ', ' Br-76 ',' 35 ',' (B+, EC) ; Se-76 ; 100 ',' Q+ ; 4963 ','暂无',' 58.0E3 ; 0.7E3 ', ' C-11 ',' 6 ',' (B+, EC) ; B-11 ; 100 ',' Q+ ; 1982.5 ','暂无',' 1.2217E3 ; 0.0014E3 ', ' C-14 ',' 6 ',' (B-) ; N-14 ; 100 ',' Q- ; 156.476 ','暂无',' 179.9E9 ; 0.9E9 ', ' Ca-41 ',' 20 ',' (EC) ; K-41 ; 100 ',' Q+ ; 421.63 ','暂无',' 3.16E12 ; 0.05E12 ', ' Ca-45 ',' 20 ',' (B-) ; Sc-45 ; 100 ',' Q- ; 258 ','暂无',' 14.052E6 ; 0.010E6 ', ' Cd-109 ',' 48 ',' (EC) ; Ag-109 ; 100 ',' Q+ ; 215.5 ','暂无',' 39.908E6 ; 0.035E6 ', ' Ce-139 ',' 58 ',' (EC) ; La-139 ; 100 ',' Q+ ; 270 ','暂无',' 11.8922E6 ; 0.0017E6 ', ' Ce-141 ',' 58 ',' (B-) ; Pr-141 ; 100 ',' Q- ; 580.4 ',' (B-) ; La-141 ; 100 ',' 2.8083E6 ; 0.0010E6 ', ' Ce-144 ',' 58 ',' (B-) ; Pr-144 ; 100 ',' Q- ; 318.6 ','暂无',' 24.614E6 ; 0.005E6 ', ' Cf-252 ',' 98 ',' (alpha) ; Cm-248 ; 96.914 ',' Qalpha ; 6216.87 ','暂无',' 83.53E6 ; 0.08E6 ', ' Cl-36 ',' 17 ',' (B+, EC) ; S-36 ; 1.9 ; (B-) ; Ar-36 ; 98.1 ',' Q+ ; 1142.14 ; Q- ; 709.55 ','暂无',' 9.53E12 ; 0.13E12 ', ' Cm-242 ',' 96 ',' (alpha) ; Pu-238 ; 100 ',' Qalpha ; 6215.56 ',' (B-) ; Am-242 ; 83.1 ',' 14.071E6 ; 0.007E6 ', ' Cm-243 ',' 96 ',' (EC) ; Am-243 ; 0.29 ; (alpha) ; Pu-239 ; 99.71 ',' Q+ ; 7.5 ; Qalpha ; 6168.8 ','暂无',' 912E6 ; 13E6 ', ' Cm-244 ',' 96 ',' (alpha) ; Pu-240 ; 100 ',' Qalpha ; 5901.74 ',' (B-) ; Am-244 ; 100 ; ; (B-) ; Am-244m ; 99.964 ',' 571.5E6 ; 0.9E6 ', ' Cm-245 ',' 96 ',' (alpha) ; Pu-241 ; 100 ',' Qalpha ; 5622.3 ',' (B-) ; Am-245 ; 100 ',' 260.3E9 ; 2.2E9 ', ' Cm-246 ',' 96 ',' (alpha) ; Pu-242 ; 99.97385 ',' Qalpha ; 5476.7 ','暂无',' 149.0E9 ; 0.9E9 ', ' Co-56 ',' 27 ',' (B+, EC) ; Fe-56 ; 100 ',' Q+ ; 4566 ',' (B+, EC) ; Ni-56 ; 100 ',' 6.6732E6 ; 0.0022E6 ', ' Co-57 ',' 27 ',' (EC) ; Fe-57 ; 100 ',' Q+ ; 836.2 ',' (B+, EC) ; Ni-57 ; 100 ',' 23.4844E6 ; 0.0035E6 ', ' Co-58 ',' 27 ',' (B+, EC) ; Fe-58 ; 100 ',' Q+ ; 2307.9 ',' (I.T.) ; Co-58m ; 100 ',' 6.1214E6 ; 0.0026E6 ', ' Co-60 ',' 27 ',' (B-) ; Ni-60 ; 100 ',' Q- ; 2823.07 ',' (I.T.) ; Co-60m ; 99.75 ',' 166.340E6 ; 0.025E6 ', ' Cr-51 ',' 24 ',' (EC) ; V-51 ; 100 ',' Q+ ; 752.62 ','暂无',' 2.39363E6 ; 0.00035E6 ', ' Cs-134 ',' 55 ',' (EC) ; Xe-134 ; 0.0003 ; (B-) ; Ba-134 ; 99.9997 ',' Q+ ; 1233.3 ; Q- ; 2058.98 ',' (I.T.) ; Cs-134m ; 100 ',' 65.146E6 ; 0.044E6 ', ' Cs-137 ',' 55 ',' (B-) ; Ba-137 ; 100 ',' Q- ; 1175.63 ',' (B-) ; Xe-137 ; 100 ',' 948.3E6 ; 2.5E6 ', ' Cu-61 ',' 29 ',' (B+, EC) ; Ni-61 ; 100 ',' Q+ ; 2237.5 ','暂无',' 12.12E3 ; 0.12E3 ', ' Cu-64 ',' 29 ',' (B+, EC) ; Ni-64 ; 61.52 ; (B-) ; Zn-64 ; 38.48 ',' Q+ ; 1675.03 ; Q- ; 579.4 ','暂无',' 45.721E3 ; 0.007E3 ', ' Er-169 ',' 68 ',' (B-) ; Tm-169 ; 100 ',' Q- ; 353 ','暂无',' 810.4E3 ; 1.7E3 ', ' Eu-152 ',' 63 ',' (B+, EC) ; Sm-152 ; 72.1 ; (B-) ; Gd-152 ; 27.9 ',' Q+ ; 1874.3 ; Q- ; 1818.8 ','暂无',' 426.7E6 ; 0.5E6 ', ' Eu-154 ',' 63 ',' (EC) ; Sm-154 ; 0.018 ; (B-) ; Gd-154 ; 99.982 ',' Q+ ; 717.3 ; Q- ; 1968.4 ','暂无',' 271.42E6 ; 0.13E6 ', ' Eu-155 ',' 63 ',' (B-) ; Gd-155 ; 100 ',' Q- ; 252.1 ',' (B-) ; Sm-155 ; 100 ',' 149.99E6 ; 0.44E6 ', ' F-18 ',' 9 ',' (B+, EC) ; O-18 ; 100 ',' Q+ ; 1655.9 ','暂无',' 6.5840E3 ; 0.0008E3 ', ' Fe-52 ',' 26 ',' (B+, EC) ; Mn-52 ; 100 ',' Q+ ; 2375 ','暂无',' 29.783E3 ; 0.029E3 ', ' Fe-55 ',' 26 ',' (EC) ; Mn-55 ; 100 ',' Q+ ; 231.21 ','暂无',' 86.69E6 ; 0.25E6 ', ' Fe-59 ',' 26 ',' (B-) ; Co-59 ; 100 ',' Q- ; 1565 ','暂无',' 3.8443E6 ; 0.0010E6 ', ' Fr-221 ',' 87 ',' (B-) ; Ra-221 ; 0.0048 ; (alpha) ; At-217 ; 99.9952 ',' Q- ; 314 ; Qalpha ; 6457.8 ',' (alpha) ; Ac-225 ; 100 ',' 287.4 ; 1.2 ', ' Fr-223 ',' 87 ',' (B-) ; Ra-223 ; 99.98 ; (alpha) ; At-219 ; 0.02 ',' Q- ; 1149.2 ; Qalpha ; 5562 ',' (alpha) ; Ac-227 ; 1.38 ',' 1.3200E3 ; 0.0042E3 ', ' Ga-66 ',' 31 ',' (B+, EC) ; Zn-66 ; 100 ',' Q+ ; 5175 ','暂无',' 34.16E3 ; 0.25E3 ', ' Ga-67 ',' 31 ',' (EC) ; Zn-67 ; 100 ',' Q+ ; 1000.8 ','暂无',' 281.776E3 ; 0.043E3 ', ' Ga-68 ',' 31 ',' (B+, EC) ; Zn-68 ; 100 ',' Q+ ; 2921.1 ',' (B+, EC) ; Ge-68 ; 100 ',' 4.070E3 ; 0.012E3 ', ' Gd-153 ',' 64 ',' (EC) ; Eu-153 ; 100 ',' Q+ ; 484 ','暂无',' 20.77E6 ; 0.09E6 ', ' Gd-159 ',' 64 ',' (B-) ; Tb-159 ; 100 ',' Q- ; 970.5 ','暂无',' 66.524E3 ; 0.025E3 ', ' Ge-68 ',' 32 ',' (EC) ; Ga-68 ; 100 ',' Q+ ; 106.9 ','暂无',' 23.410E6 ; 0.022E6 ', ' H-3 ',' 1 ',' (B-) ; He-3 ; 100 ',' Q- ; 18.591 ','暂无',' 388.5E6 ; 0.8E6 ', ' Hg-203 ',' 80 ',' (B-) ; Tl-203 ; 100 ',' Q- ; 491.8 ','暂无',' 4.0257E6 ; 0.0010E6 ', ' Hg-206 ',' 80 ',' (B-) ; Tl-206 ; 100 ',' Q- ; 1308 ',' (alpha) ; Pb-210 ; 0.0000019 ',' 499.2 ; 4.2 ', ' Ho-166 ',' 67 ',' (B-) ; Er-166 ; 100 ',' Q- ; 1854.5 ','暂无',' 96.46E3 ; 0.10E3 ', ' Ho-166m ',' 67 ',' (B-) ; Er-166 ; 100 ',' Q- ; 1860.5 ','暂无',' 35.75E9 ; 0.25E9 ', ' I-123 ',' 53 ',' (EC) ; Te-123 ; 100 ',' Q+ ; 1234 ',' (B+, EC) ; Xe-123 ; 100 ',' 47.604E3 ; 0.013E3 ', ' I-125 ',' 53 ',' (EC) ; Te-125 ; 100 ',' Q+ ; 185.77 ',' (B+, EC) ; Xe-125 ; 100 ',' 5.1311E6 ; 0.0024E6 ', ' I-129 ',' 53 ',' (B-) ; Xe-129 ; 100 ',' Q- ; 190.8 ',' (B-) ; Te-129 ; 100 ; ; (B-) ; Te-129m ; 37 ',' 508E12 ; 22E12 ', ' I-131 ',' 53 ',' (B-) ; Xe-131 ; 100 ',' Q- ; 970.8 ',' (B-) ; Te-131 ; 100 ; ; (B-) ; Te-131m ; 79 ',' 693.21E3 ; 0.16E3 ', ' I-133 ',' 53 ',' (B-) ; Xe-133 ; 100 ',' Q- ; 1757 ',' (B-) ; Te-133 ; 100 ; ; (B-) ; Te-133m ; 82.5 ',' 75.13E3 ; 0.29E3 ', ' In-111 ',' 49 ',' (EC) ; Cd-111 ; 100 ',' Q+ ; 861.8 ','暂无',' 242.343E3 ; 0.035E3 ', ' Ir-192 ',' 77 ',' (EC) ; Os-192 ; 4.87 ; (B-) ; Pt-192 ; 95.13 ',' Q+ ; 1046.2 ; Q- ; 1459.7 ','暂无',' 6.3787E6 ; 0.0011E6 ', ' Ir-194 ',' 77 ',' (B-) ; Pt-194 ; 100 ',' Q- ; 2246.8 ','暂无',' 69.48E3 ; 0.36E3 ', ' K-40 ',' 19 ',' (B+, EC) ; Ar-40 ; 10.75 ; (B-) ; Ca-40 ; 89.25 ',' Q+ ; 1504.69 ; Q- ; 1311.07 ','暂无',' 39.46E15 ; 0.09E15 ', ' Kr-85 ',' 36 ',' (B-) ; Rb-85 ; 100 ',' Q- ; 687.1 ',' (I.T.) ; Kr-85m ; 21.4 ',' 339.3E6 ; 0.7E6 ', ' La-138 ',' 57 ',' (EC) ; Ba-138 ; 65.2 ; (B-) ; Ce-138 ; 34.8 ',' Q+ ; 1740 ; Q- ; 1051.7 ','暂无',' 3.27E18 ; 0.06E18 ', ' La-140 ',' 57 ',' (B-) ; Ce-140 ; 100 ',' Q- ; 3760.9 ',' (B-) ; Ba-140 ; 100 ',' 145.029E3 ; 0.018E3 ', ' Lu-177 ',' 71 ',' (B-) ; Hf-177 ; 100 ',' Q- ; 498.3 ',' (I.T.) ; Lu-177m ; 21.7 ',' 574.30E3 ; 0.35E3 ', ' Mn-54 ',' 25 ',' (B+, EC) ; Cr-54 ; 100 ',' Q+ ; 1377.2 ','暂无',' 26.9732E6 ; 0.0026E6 ', ' Mn-56 ',' 25 ',' (B-) ; Fe-56 ; 100 ',' Q- ; 3695.5 ','暂无',' 9.2836E3 ; 0.0017E3 ', ' Mo-99 ',' 42 ',' (B-) ; Tc-99 ; 100 ',' Q- ; 1357.2 ','暂无',' 237.42E3 ; 0.05E3 ', ' N-13 ',' 7 ',' (B+, EC) ; C-13 ; 100 ',' Q+ ; 2220.45 ','暂无',' 598.02 ; 0.22 ', ' Na-22 ',' 11 ',' (B+, EC) ; Ne-22 ; 100 ',' Q+ ; 2843.02 ','暂无',' 82.140E6 ; 0.025E6 ', ' Na-24 ',' 11 ',' (B-) ; Mg-24 ; 100 ',' Q- ; 5515.61 ',' (I.T.) ; Na-24m ; 99.5 ',' 53.849E3 ; 0.007E3 ', ' Nb-93m ',' 41 ',' (I.T.) ; Nb-93 ; 100 ',' QIT ; 30.77 ','暂无',' 508.7E6 ; 4.7E6 ', ' Nb-95 ',' 41 ',' (B-) ; Mo-95 ; 100 ',' Q- ; 925.6 ',' (I.T.) ; Nb-95m ; 97.5 ; (B-) ; Zr-95 ; 100 ',' 3.0232E6 ; 0.0005E6 ', ' Nb-95m ',' 41 ',' (I.T.) ; Nb-95 ; 97.5 ; (B-) ; Mo-95 ; 2.5 ',' QIT ; 235.69 ; Q- ; 1161.3 ','暂无',' 311.9E3 ; 2.6E3 ', ' Nd-147 ',' 60 ',' (B-) ; Pm-147 ; 100 ',' Q- ; 895.7 ',' (B-) ; Pr-147 ; 100 ',' 949.3E3 ; 1.0E3 ', ' Ni-57 ',' 28 ',' (B+, EC) ; Co-57 ; 100 ',' Q+ ; 3264.2 ','暂无',' 129.3E3 ; 2.0E3 ', ' Ni-59 ',' 28 ',' (B+, EC) ; Co-59 ; 100 ',' Q+ ; 1072.76 ','暂无',' 2.40E12 ; 0.16E12 ', ' Ni-63 ',' 28 ',' (B-) ; Cu-63 ; 100 ',' Q- ; 66.98 ','暂无',' 3.11E9 ; 0.08E9 ', ' Np-236 ',' 93 ',' (EC) ; U-236 ; 87.8 ; (B-) ; Pu-236 ; 12 ; (alpha) ; Pa-232 ; 0.16 ',' Q+ ; 930 ; Q- ; 480 ; Qalpha ; 5010 ','暂无',' 4.89E12 ; 0.25E12 ', ' Np-236m ',' 93 ',' (EC) ; U-236 ; 53 ; (B-) ; Pu-236 ; 47 ',' Q+ ; 993 ; Q- ; 537 ','暂无',' 81.0E3 ; 1.4E3 ', ' Np-237 ',' 93 ',' (alpha) ; Pa-233 ; 100 ',' Qalpha ; 4958.3 ',' (B+, EC) ; Pu-237 ; 99.9958 ; (B-) ; U-237 ; 100 ; (alpha) ; Am-241 ; 100 ',' 67.66E12 ; 0.22E12 ', ' Np-238 ',' 93 ',' (B-) ; Pu-238 ; 100 ',' Q- ; 1291.5 ',' (alpha) ; Am-242m ; 0.46 ',' 181.61E3 ; 0.43E3 ', ' Np-239 ',' 93 ',' (B-) ; Pu-239 ; 100 ',' Q- ; 722.5 ',' (B-) ; U-239 ; 100 ; (alpha) ; Am-243 ; 100 ',' 203.56E3 ; 0.26E3 ', ' O-15 ',' 8 ',' (B+, EC) ; N-15 ; 100 ',' Q+ ; 2757 ','暂无',' 122.46 ; 0.36 ', ' P-32 ',' 15 ',' (B-) ; S-32 ; 100 ',' Q- ; 1710.66 ','暂无',' 1.2341E6 ; 0.0031E6 ', ' P-33 ',' 15 ',' (B-) ; S-33 ; 100 ',' Q- ; 248.5 ','暂无',' 2.1931E6 ; 0.0035E6 ', ' Pa-231 ',' 91 ',' (alpha) ; Ac-227 ; 100 ',' Qalpha ; 5149.9 ',' (B-) ; Th-231 ; 100 ; (alpha) ; Np-235 ; 0.0014 ',' 1.031E12 ; 0.008E12 ', ' Pa-233 ',' 91 ',' (B-) ; U-233 ; 100 ',' Q- ; 570.1 ',' (B-) ; Th-233 ; 100 ; (alpha) ; Np-237 ; 100 ',' 2.3311E6 ; 0.0017E6 ', ' Pa-234 ',' 91 ',' (B-) ; U-234 ; 100 ',' Q- ; 2195 ',' (I.T.) ; Pa-234m ; 0.15 ; (B-) ; Th-234 ; 100 ',' 24.12E3 ; 0.18E3 ', ' Pa-234m ',' 91 ',' (I.T.) ; Pa-234 ; 0.15 ; (B-) ; U-234 ; 99.85 ',' QIT ; 73.92 ; Q- ; 2269 ','暂无',' 69.5 ; 0.7 ', ' Pb-203 ',' 82 ',' (EC) ; Tl-203 ; 100 ',' Q+ ; 975 ','暂无',' 186.944E3 ; 0.036E3 ', ' Pb-209 ',' 82 ',' (B-) ; Bi-209 ; 100 ',' Q- ; 644 ',' (B-) ; Tl-209 ; 100 ; (alpha) ; Po-213 ; 100 ',' 11.80E3 ; 0.05E3 ', ' Pb-210 ',' 82 ',' (B-) ; Bi-210 ; 100 ; (alpha) ; Hg-206 ; 0.0000019 ',' Q- ; 63.5 ; Qalpha ; 3792 ',' (B-) ; Tl-210 ; 100 ; (alpha) ; Po-214 ; 100 ',' 701.5E6 ; 3.8E6 ', ' Pb-211 ',' 82 ',' (B-) ; Bi-211 ; 100 ',' Q- ; 1367 ',' (alpha) ; Po-215 ; 99.99977 ',' 2.166E3 ; 0.012E3 ', ' Pb-212 ',' 82 ',' (B-) ; Bi-212 ; 100 ',' Q- ; 569.9 ',' (alpha) ; Po-216 ; 100 ',' 38.304E3 ; 0.036E3 ', ' Pb-214 ',' 82 ',' (B-) ; Bi-214 ; 100 ',' Q- ; 1019 ',' (alpha) ; Po-218 ; 99.978 ',' 1.6150E3 ; 0.0026E3 ', ' Pd-109 ',' 46 ',' (B-) ; Ag-109 ; 100 ',' Q- ; 1116.1 ','暂无',' 48.89E3 ; 0.43E3 ', ' Pm-147 ',' 61 ',' (B-) ; Sm-147 ; 100 ',' Q- ; 224.1 ',' (B-) ; Nd-147 ; 100 ',' 82.786E6 ; 0.013E6 ', ' Pm-148 ',' 61 ',' (B-) ; Sm-148 ; 100 ',' Q- ; 2471 ',' (I.T.) ; Pm-148m ; 5.6 ',' 464.0E3 ; 1.3E3 ', ' Pm-148m ',' 61 ',' (I.T.) ; Pm-148 ; 5.6 ; (B-) ; Sm-148 ; 94.4 ',' QIT ; 137 ; Q- ; 2608 ','暂无',' 3.567E6 ; 0.011E6 ', ' Po-209 ',' 84 ',' (EC) ; Bi-209 ; 0.454 ; (alpha) ; Pb-205 ; 99.546 ',' Q+ ; 1892.5 ; Qalpha ; 4979.2 ','暂无',' 3.63E9 ; 0.41E9 ', ' Po-210 ',' 84 ',' (alpha) ; Pb-206 ; 100 ',' Qalpha ; 5407.45 ',' (B-) ; Bi-210 ; 99.99986 ',' 11.95571E6 ; 0.00015E6 ', ' Po-211 ',' 84 ',' (alpha) ; Pb-207 ; 100 ',' Qalpha ; 7594.48 ',' (B+, EC) ; At-211 ; 58.22 ; (I.T.) ; Po-211m ; 0.016 ; (B-) ; Bi-211 ; 0.276 ',' 516E-3 ; 3E-3 ', ' Po-212 ',' 84 ',' (alpha) ; Pb-208 ; 100 ',' Qalpha ; 8954.12 ',' (B-) ; Bi-212 ; 64.07 ',' 300E-9 ; 2E-9 ', ' Po-213 ',' 84 ',' (alpha) ; Pb-209 ; 100 ',' Qalpha ; 8536.1 ',' (B-) ; Bi-213 ; 97.91 ; (alpha) ; Rn-217 ; 100 ',' 3.70E-6 ; 0.05E-6 ', ' Po-214 ',' 84 ',' (alpha) ; Pb-210 ; 100 ',' Qalpha ; 7833.46 ',' (B-) ; Bi-214 ; 99.979 ; (alpha) ; Rn-218 ; 100 ',' 162.3E-6 ; 1.2E-6 ', ' Po-215 ',' 84 ',' (B-) ; At-215 ; 0.00023 ; (alpha) ; Pb-211 ; 99.99977 ',' Q- ; 715 ; Qalpha ; 7526.3 ',' (B-) ; Bi-215 ; 100 ; (alpha) ; Rn-219 ; 100 ',' 1.7810E-3 ; 0.0040E-3 ', ' Po-216 ',' 84 ',' (alpha) ; Pb-212 ; 100 ',' Qalpha ; 6906.3 ',' (alpha) ; Rn-220 ; 100 ',' 148E-3 ; 4E-3 ', ' Po-218 ',' 84 ',' (B-) ; At-218 ; 0.022 ; (alpha) ; Pb-214 ; 99.978 ',' Q- ; 260 ; Qalpha ; 6114.68 ',' (alpha) ; Rn-222 ; 100 ',' 184.3 ; 1.3 ', ' Pr-142 ',' 59 ',' (EC) ; Ce-142 ; 0.0164 ; (B-) ; Nd-142 ; 99.9836 ',' Q+ ; 744.5 ; Q- ; 2161.6 ','暂无',' 68.90E3 ; 0.14E3 ', ' Pr-144 ',' 59 ',' (B-) ; Nd-144 ; 100 ',' Q- ; 2997.4 ',' (I.T.) ; Pr-144m ; 99.94 ; (B-) ; Ce-144 ; 100 ',' 1.0374E3 ; 0.0024E3 ', ' Pr-144m ',' 59 ',' (I.T.) ; Pr-144 ; 99.94 ; (B-) ; Nd-144 ; 0.06 ',' QIT ; 59.03 ; Q- ; 3056.4 ','暂无',' 432 ; 12 ', ' Pu-238 ',' 94 ',' (alpha) ; U-234 ; 100 ',' Qalpha ; 5593.2 ',' (B-) ; Np-238 ; 100 ; (alpha) ; Cm-242 ; 100 ',' 2.7688E9 ; 0.0009E9 ', ' Pu-239 ',' 94 ',' (alpha) ; U-235 ; 100 ',' Qalpha ; 5244.51 ',' (B-) ; Np-239 ; 100 ; (alpha) ; Cm-243 ; 99.71 ',' 760.52E9 ; 0.35E9 ', ' Pu-240 ',' 94 ',' (alpha) ; U-236 ; 100 ',' Qalpha ; 5255.75 ',' (B-) ; Np-240 ; 100 ; (alpha) ; Cm-244 ; 100 ',' 207.04E9 ; 0.22E9 ', ' Pu-241 ',' 94 ',' (B-) ; Am-241 ; 99.99756 ; (alpha) ; U-237 ; 0.00244 ',' Q- ; 20.8 ; Qalpha ; 5140 ',' (alpha) ; Cm-245 ; 100 ',' 452.2E6 ; 1.3E6 ', ' Pu-242 ',' 94 ',' (alpha) ; U-238 ; 100 ',' Qalpha ; 4984.5 ',' (B+, EC) ; Am-242 ; 16.9 ; (alpha) ; Cm-246 ; 99.97385 ',' 11.77E12 ; 0.09E12 ', ' Ra-223 ',' 88 ',' (alpha) ; Rn-219 ; 100 ',' Qalpha ; 5978.99 ',' (B-) ; Fr-223 ; 99.98 ; (alpha) ; Th-227 ; 100 ',' 987.6E3 ; 2.6E3 ', ' Ra-224 ',' 88 ',' (alpha) ; Rn-220 ; 100 ',' Qalpha ; 5788.85 ',' (alpha) ; Th-228 ; 100 ',' 313.72E3 ; 0.17E3 ', ' Ra-225 ',' 88 ',' (B-) ; Ac-225 ; 100 ',' Q- ; 356 ','暂无',' 1.280E6 ; 0.016E6 ', ' Ra-226 ',' 88 ',' (alpha) ; Rn-222 ; 100 ',' Qalpha ; 4870.62 ',' (alpha) ; Th-230 ; 100 ',' 50.49E9 ; 0.22E9 ', ' Ra-226 ',' 88 ',' (alpha) ; Rn-222 ; 100 ',' Qalpha ; 4870.62 ',' (alpha) ; Th-230 ; 100 ',' 50.49E9 ; 0.22E9 ', ' Ra-228 ',' 88 ',' (B-) ; Ac-228 ; 100 ',' Q- ; 45.8 ',' (alpha) ; Th-232 ; 100 ',' 181.5E6 ; 1.3E6 ', ' Rb-82 ',' 37 ',' (B+, EC) ; Kr-82 ; 100 ',' Q+ ; 4403 ',' (B+, EC) ; Sr-82 ; 100 ',' 75.91 ; 0.27 ', ' Re-186 ',' 75 ',' (EC) ; W-186 ; 7.53 ; (B-) ; Os-186 ; 92.47 ',' Q+ ; 581.6 ; Q- ; 1069.5 ','暂无',' 321.29E3 ; 0.15E3 ', ' Re-188 ',' 75 ',' (B-) ; Os-188 ; 100 ',' Q- ; 2120.4 ',' (I.T.) ; Re-188m ; 100 ; (B-) ; W-188 ; 100 ',' 61.218E3 ; 0.014E3 ', ' Rh-106 ',' 45 ',' (B-) ; Pd-106 ; 100 ',' Q- ; 3546 ',' (B-) ; Ru-106 ; 100 ',' 30.1 ; 0.3 ', ' Rn-217 ',' 86 ',' (alpha) ; Po-213 ; 100 ',' Qalpha ; 7887 ',' (B-) ; At-217 ; 0.0067 ; (alpha) ; Ra-221 ; 100 ',' 540E-6 ; 50E-6 ', ' Rn-218 ',' 86 ',' (alpha) ; Po-214 ; 100 ',' Qalpha ; 7262.5 ',' (B-) ; At-218 ; 0.1 ',' 36.0E-3 ; 1.9E-3 ', ' Rn-219 ',' 86 ',' (alpha) ; Po-215 ; 100 ',' Qalpha ; 6946.1 ',' (B-) ; At-219 ; 3 ; (alpha) ; Ra-223 ; 100 ',' 3.98 ; 0.03 ', ' Rn-220 ',' 86 ',' (alpha) ; Po-216 ; 100 ',' Qalpha ; 6404.67 ',' (alpha) ; Ra-224 ; 100 ',' 55.8 ; 0.3 ', ' Rn-222 ',' 86 ',' (alpha) ; Po-218 ; 100 ',' Qalpha ; 5590.3 ',' (alpha) ; Ra-226 ; 100 ',' 330.32E3 ; 0.07E3 ', ' Ru-106 ',' 44 ',' (B-) ; Rh-106 ; 100 ',' Q- ; 39.4 ','暂无',' 32.10E6 ; 0.18E6 ', ' S-35 ',' 16 ',' (B-) ; Cl-35 ; 100 ',' Q- ; 167.33 ','暂无',' 7.538E6 ; 0.013E6 ', ' Sb-124 ',' 51 ',' (B-) ; Te-124 ; 100 ',' Q- ; 2904.3 ','暂无',' 5.2020E6 ; 0.0010E6 ', ' Sb-125 ',' 51 ',' (B-) ; Te-125 ; 100 ',' Q- ; 766.7 ',' (B-) ; Sn-125 ; 100 ',' 87.051E6 ; 0.008E6 ', ' Sb-127 ',' 51 ',' (B-) ; Te-127 ; 100 ',' Q- ; 1582 ','暂无',' 333E3 ; 6E3 ', ' Sc-44 ',' 21 ',' (B+, EC) ; Ca-44 ; 100 ',' Q+ ; 3653.3 ',' (B+, EC) ; Ti-44 ; 100 ',' 14.29E3 ; 0.14E3 ', ' Sc-46 ',' 21 ',' (B-) ; Ti-46 ; 100 ',' Q- ; 2366.5 ','暂无',' 7.2392E6 ; 0.0014E6 ', ' Sc-47 ',' 21 ',' (B-) ; Ti-47 ; 100 ',' Q- ; 600.8 ',' (B-) ; Ca-47 ; 100 ',' 289.31E3 ; 0.08E3 ', ' Se-73 ',' 34 ',' (B+, EC) ; As-73 ; 100 ',' Q+ ; 2725 ','暂无',' 25.56E3 ; 0.32E3 ', ' Se-75 ',' 34 ',' (EC) ; As-75 ; 100 ',' Q+ ; 863.6 ','暂无',' 10.3491E6 ; 0.0021E6 ', ' Se-79 ',' 34 ',' (B-) ; Br-79 ; 100 ',' Q- ; 150.9 ','暂无',' 11.2E12 ; 1.3E12 ', ' Sm-151 ',' 62 ',' (B-) ; Eu-151 ; 100 ',' Q- ; 76.4 ',' (B-) ; Pm-151 ; 100 ',' 2.988E9 ; 0.019E9 ', ' Sm-153 ',' 62 ',' (B-) ; Eu-153 ; 100 ',' Q- ; 807.6 ','暂无',' 166.6267E3 ; 0.0043E3 ', ' Sn-113 ',' 50 ',' (EC) ; In-113 ; 100 ',' Q+ ; 1036 ','暂无',' 9.9438E6 ; 0.0026E6 ', ' Sr-82 ',' 38 ',' (EC) ; Rb-82 ; 100 ',' Q+ ; 178 ','暂无',' 2.1900E6 ; 0.0015E6 ', ' Sr-85 ',' 38 ',' (EC) ; Rb-85 ; 100 ',' Q+ ; 1065 ','暂无',' 5.6030E6 ; 0.0006E6 ', ' Sr-89 ',' 38 ',' (B-) ; Y-89 ; 100 ',' Q- ; 1495.1 ',' (B-) ; Rb-89 ; 100 ',' 4.3692E6 ; 0.0026E6 ', ' Sr-90 ',' 38 ',' (B-) ; Y-90 ; 100 ',' Q- ; 545.9 ',' (B-) ; Rb-90 ; 100 ; ; (B-) ; Rb-90m ; 97.4 ',' 908.8E6 ; 2.2E6 ', ' Ta-182 ',' 73 ',' (B-) ; W-182 ; 100 ',' Q- ; 1814.3 ',' (I.T.) ; Ta-182m ; 100 ',' 9.902E6 ; 0.011E6 ', ' Tc-94m ',' 43 ',' (B+, EC) ; Mo-94 ; 100 ',' Q+ ; 4332 ','暂无',' 3.11E3 ; 0.06E3 ', ' Tc-99 ',' 43 ',' (B-) ; Ru-99 ; 100 ',' Q- ; 293.8 ',' (I.T.) ; Tc-99m ; 100 ; (B-) ; Mo-99 ; 100 ',' 6.674E12 ; 0.035E12 ', ' Tc-99m ',' 43 ',' (I.T.) ; Tc-99 ; 100 ; (B-) ; Ru-99 ; 0.004 ',' QIT ; 142.683 ; Q- ; 436.2 ','暂无',' 21.6241E3 ; 0.0036E3 ', ' Te-123m ',' 52 ',' (I.T.) ; Te-123 ; 100 ',' QIT ; 247.4 ','暂无',' 10.308E6 ; 0.009E6 ', ' Te-127 ',' 52 ',' (B-) ; I-127 ; 100 ',' Q- ; 702 ',' (I.T.) ; Te-127m ; 97.27 ; (B-) ; Sb-127 ; 100 ',' 33.66E3 ; 0.36E3 ', ' Te-127m ',' 52 ',' (I.T.) ; Te-127 ; 97.27 ; (B-) ; I-127 ; 2.73 ',' QIT ; 88.23 ; Q- ; 790 ','暂无',' 9.17E6 ; 0.06E6 ', ' Te-132 ',' 52 ',' (B-) ; I-132 ; 100 ',' Q- ; 518 ',' (B-) ; Sb-132 ; 100 ; ; (B-) ; Sb-132m ; 100 ',' 279.1E3 ; 1.1E3 ', ' Th-228 ',' 90 ',' (alpha) ; Ra-224 ; 100 ',' Qalpha ; 5520.08 ',' (B+, EC) ; Pa-228 ; 98 ; (B-) ; Ac-228 ; 100 ; (alpha) ; U-232 ; 100 ',' 60.356E6 ; 0.028E6 ', ' Th-231 ',' 90 ',' (B-) ; Pa-231 ; 100 ',' Q- ; 391.6 ',' (alpha) ; U-235 ; 100 ',' 91.879E3 ; 0.036E3 ', ' Th-232 ',' 90 ',' (alpha) ; Ra-228 ; 100 ',' Qalpha ; 4081.6 ',' (B+, EC) ; Pa-232 ; 0.003 ; (alpha) ; U-236 ; 100 ',' 442.4E15 ; 1.9E15 ', ' Th-233 ',' 90 ',' (B-) ; Pa-233 ; 100 ',' Q- ; 1243.1 ','暂无',' 1.3290E3 ; 0.0048E3 ', ' Th-234 ',' 90 ',' (B-) ; Pa-234 ; 100 ',' Q- ; 272 ',' (alpha) ; U-238 ; 100 ',' 2.0822E6 ; 0.0026E6 ', ' Ti-44 ',' 22 ',' (EC) ; Sc-44 ; 100 ',' Q+ ; 267.5 ','暂无',' 1.893E9 ; 0.035E9 ', ' Tl-201 ',' 81 ',' (EC) ; Hg-201 ; 100 ',' Q+ ; 483 ',' (B+, EC) ; Pb-201 ; 100 ',' 262.84E3 ; 0.15E3 ', ' Tl-204 ',' 81 ',' (EC) ; Hg-204 ; 2.92 ; (B-) ; Pb-204 ; 97.08 ',' Q+ ; 345 ; Q- ; 763.72 ','暂无',' 119.54E6 ; 0.47E6 ', ' Tl-206 ',' 81 ',' (B-) ; Pb-206 ; 100 ',' Q- ; 1532.4 ',' (B-) ; Hg-206 ; 100 ; (alpha) ; Bi-210 ; 0.00014 ',' 252.1 ; 0.7 ', ' Tl-207 ',' 81 ',' (B-) ; Pb-207 ; 100 ',' Q- ; 1418 ',' (alpha) ; Bi-211 ; 99.724 ',' 286.4 ; 0.7 ', ' Tl-208 ',' 81 ',' (B-) ; Pb-208 ; 100 ',' Q- ; 4999 ',' (alpha) ; Bi-212 ; 35.93 ',' 183.48 ; 0.36 ', ' Tl-209 ',' 81 ',' (B-) ; Pb-209 ; 100 ',' Q- ; 3976 ',' (alpha) ; Bi-213 ; 2.09 ',' 129.66 ; 0.42 ', ' Tl-210 ',' 81 ',' (B-) ; Pb-210 ; 100 ',' Q- ; 5482 ',' (alpha) ; Bi-214 ; 0.021 ',' 78.0 ; 1.8 ', ' Tm-170 ',' 69 ',' (EC) ; Er-170 ; 0.147 ; (B-) ; Yb-170 ; 99.9 ',' Q+ ; 314.4 ; Q- ; 968 ','暂无',' 11.04E6 ; 0.05E6 ', ' U-232 ',' 92 ',' (alpha) ; Th-228 ; 100 ',' Qalpha ; 5413.63 ',' (B-) ; Pa-232 ; 99.997 ; (alpha) ; Pu-236 ; 100 ',' 2.228E9 ; 0.035E9 ', ' U-234 ',' 92 ',' (alpha) ; Th-230 ; 100 ',' Qalpha ; 4857.7 ',' (B-) ; Pa-234 ; 100 ; ; (B-) ; Pa-234m ; 99.85 ; (alpha) ; Pu-238 ; 100 ',' 7.747E12 ; 0.019E12 ', ' U-235 ',' 92 ',' (alpha) ; Th-231 ; 100 ',' Qalpha ; 4678.3 ',' (B+, EC) ; Np-235 ; 99.9986 ; (alpha) ; Pu-239 ; 100 ',' 22.216E15 ; 0.032E15 ', ' U-236 ',' 92 ',' (alpha) ; Th-232 ; 100 ',' Qalpha ; 4573.1 ',' (B+, EC) ; Np-236 ; 87.8 ; (B+, EC) ; Np-236m ; 53 ; (alpha) ; Pu-240 ; 100 ',' 739.4E12 ; 1.9E12 ', ' U-237 ',' 92 ',' (B-) ; Np-237 ; 100 ',' Q- ; 518.6 ',' (alpha) ; Pu-241 ; 0.00244 ',' 583.1E3 ; 1.4E3 ', ' U-238 ',' 92 ',' (alpha) ; Th-234 ; 100 ',' Qalpha ; 4269.7 ',' (alpha) ; Pu-242 ; 100 ',' 141.00E15 ; 0.16E15 ', ' U-239 ',' 92 ',' (B-) ; Np-239 ; 100 ',' Q- ; 1261.5 ','暂无',' 1.4076E3 ; 0.0030E3 ', ' Xe-127 ',' 54 ',' (EC) ; I-127 ; 100 ',' Q+ ; 662.3 ','暂无',' 3.1413E6 ; 0.0027E6 ', ' Xe-131m ',' 54 ',' (I.T.) ; Xe-131 ; 100 ',' QIT ; 163.93 ','暂无',' 1.0335E6 ; 0.0017E6 ', ' Xe-133 ',' 54 ',' (B-) ; Cs-133 ; 100 ',' Q- ; 427.4 ',' (I.T.) ; Xe-133m ; 100 ; (B-) ; I-133 ; 100 ',' 453.375E3 ; 0.043E3 ', ' Xe-133m ',' 54 ',' (I.T.) ; Xe-133 ; 100 ',' QIT ; 233.219 ','暂无',' 189.9E3 ; 1.1E3 ', ' Xe-135m ',' 54 ',' (I.T.) ; Xe-135 ; 99.996 ; (B-) ; Cs-135 ; 0.004 ',' QIT ; 526.57 ; Q- ; 1692 ','暂无',' 918.0 ; 1.8 ', ' Y-88 ',' 39 ',' (B+, EC) ; Sr-88 ; 100 ',' Q+ ; 3622.6 ',' (B+, EC) ; Zr-88 ; 100 ',' 9.2128E6 ; 0.0043E6 ', ' Y-90 ',' 39 ',' (B-) ; Zr-90 ; 100 ',' Q- ; 2278.7 ',' (I.T.) ; Y-90m ; 99.9981 ; (B-) ; Sr-90 ; 100 ',' 230.55E3 ; 0.11E3 ', ' Y-90m ',' 39 ',' (I.T.) ; Y-90 ; 99.9981 ; (B-) ; Zr-90 ; 0.0019 ',' QIT ; 682.04 ; Q- ; 2961.8 ','暂无',' 11.48E3 ; 0.22E3 ', ' Yb-169 ',' 70 ',' (EC) ; Tm-169 ; 100 ',' Q+ ; 909 ',' (I.T.) ; Yb-169m ; 100 ',' 2.76636E6 ; 0.00043E6 ', ' Zn-63 ',' 30 ',' (B+, EC) ; Cu-63 ; 100 ',' Q+ ; 3366.2 ','暂无',' 2.300E3 ; 0.006E3 ', ' Zn-65 ',' 30 ',' (B+, EC) ; Cu-65 ; 100 ',' Q+ ; 1352.1 ','暂无',' 21.082E6 ; 0.008E6 ', ' Zr-89 ',' 40 ',' (B+, EC) ; Y-89 ; 100 ',' Q+ ; 2832.8 ','暂无',' 282.31E3 ; 0.47E3 ', ' Zr-93 ',' 40 ',' (B-) ; Nb-93 ; 100 ',' Q- ; 90.3 ',' (B-) ; Y-93 ; 100 ',' 50.8E12 ; 1.9E12 ', ' Zr-95 ',' 40 ',' (B-) ; Nb-95 ; 100 ',' Q- ; 1124.8 ','暂无',' 5.5324E6 ; 0.0005E6 ',
];

class Wait_all_finish {
    constructor(times, callback, called) {
        if ('function' !== typeof callback) {
            callback = function() {};
        }
        if ('function' !== typeof called) {
            called = function() {};
        }
        var wait_times = times,
            wait_count = 0,
            is_called = false;
        if (!wait_times) {
            wait_times = 1;
        }
        var wait_all_finish = function(param) {
            called(param);
            if (!is_called) {
                ++wait_count;
                if (param && param.error) {
                    is_called = true;
                    callback(param);
                }
                if (wait_count >= wait_times) {
                    is_called = true;
                    callback(param);
                }
            }
        }
        wait_all_finish.reset = function(times, _callback) {
            is_called = false;
            wait_count = 0;
            if (0 < times) {
                wait_times = times;
            }
            if (_callback) {
                callback = _callback;
            }
        }
        wait_all_finish.set_times = function(times) {
            wait_times = times;
        }
        wait_all_finish.get_times = function() {
            return wait_times;
        }
        wait_all_finish.add_times = function(times) {
            wait_times += times;
        }
        wait_all_finish.get_count = function() {
            return wait_count;
        }
        wait_all_finish.callback = function(param) {
            callback(param);
        }
        wait_all_finish.end_callback = function(param) {
            is_called = true;
            callback(param);
        }

        return wait_all_finish;
    }
}

// ---------------------------------------------------------------------------

var get_atom_list = [];

function cross_field() {
	setTimeout(function () {
		$('.element', $('#iframe_id').contents()[0]).on('click', function (e) {
			create_window();

			function get_target_id() {
				var c_id = $(e.target).parent().attr('id');
				var p_id = $(e.target).attr('id');
				var a_id;
				if (typeof(c_id) === 'undefined'){
					a_id = p_id;
				}else if (typeof(p_id) === 'undefined'){
					a_id = c_id;
				}
				var position = element_list.indexOf(a_id);
				return position-1;
			}

			$.ajax({
				url:'/get_atom/'+element_list[get_target_id()],
				type:'GET',
				success:function(data){
					get_atom_list.push(data['req_atom']);
					$('.element_information').append('<div class="head_content"></div><div class="main_content"></div>');
					$('.head_content').append('<div class="head_img"></div><div class="head_name 1"></div><div class="head_name 2"></div><div class="head_name 3"></div>');
					$('.main_content').append('<div class="main_content_nav"></div><div class="main_content_element"></div>');
					$('.head_img').append('<img src="/static/element_search/img2/230px-Electron_shell_'+element_list[get_target_id()+1]+'_-_no_label.svg.png">');
					$('.1').text('原子序数 : '+get_atom_list[0]['原子序数']);
					$('.2').text('元素名称 : '+get_atom_list[0]['中文名称']+element_list[get_target_id()+1]);
					$('.3').text('元素符号 ：'+get_atom_list[0]['元素符号']);
					$('.main_content_nav').append('<button class="main_button" id="main_button1"><button class="main_button" id="main_button2">');
					$('#main_button1').text('元素性质');
					$('#main_button2').text('放射性核素');
					$('.main_content_element').append('<div class="main_content_element_property ele1"></div><div class="main_content_element_property ele2"></div><div class="main_content_element_property ele3"></div><div class="main_content_element_property ele4"></div><div class="main_content_element_property ele5"></div><div class="main_content_element_property ele6"></div><div class="main_content_element_property ele7"></div><div class="main_content_element_property ele8"></div>');
					$('.ele1').text('相对原子质量 ：'+get_atom_list[0]['相对原子质量']);
					$('.ele2').text('密度 ：'+get_atom_list[0]['密度']);
					$('.ele3').text('熔点 ：'+get_atom_list[0]['熔点']);
					$('.ele4').text('沸点 ：'+get_atom_list[0]['沸点']);
					$('.ele5').text('其他核素：'+get_atom_list[0]['同位素及放射性']);
					$('.ele6').text('状态：'+get_atom_list[0]['状态']);
					$('.ele7').text('来源：'+get_atom_list[0]['来源']);
					$('.ele8').text('用途：'+get_atom_list[0]['用途']);
					$('#learn').on('click', function(){
						window.open("https://en.wikipedia.org/wiki/"+element_list[get_target_id()+1]);
					});
					// console.log(element_list[get_target_id()+1]);
					$('#main_button2').click(function(){
						$('.main_content_element').remove();
						$('.main_content').append('<div class="main_content_element">');
						$('.main_content_element').append('<div class="main_content_element_nav">');
						$('.main_content_element_nav').append('<div class="main_content_element_nav_child" id="main_content_element_nav_child1">核素符号</div><div class="main_content_element_nav_child" id="main_content_element_nav_child2">原子序数</div><div class="main_content_element_nav_child" id="main_content_element_nav_child3">衰变子体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child4">衰变能量</div><div class="main_content_element_nav_child" id="main_content_element_nav_child5">衰变母体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child6">半衰期</div>');
						$('#main_content_element_nav_child1').append('<div class="main_content_element_property"></div>');
						$('#main_content_element_nav_child2').append('<div class="main_content_element_property"></div>');
						$('#main_content_element_nav_child3').append('<div class="main_content_element_property"></div>');
						$('#main_content_element_nav_child4').append('<div class="main_content_element_property"></div>');
						$('#main_content_element_nav_child5').append('<div class="main_content_element_property"></div>');
						$('#main_content_element_nav_child6').append('<div class="main_content_element_property"></div>');
						/*-----------------*/
                        for(var i=0; i<activitvatom_list.length; i+=6) {
							if (activitvatom_list[i].indexOf(element_list[get_target_id()] + '-') != -1) {
								$('#main_content_element_nav_child1').children().append('<div class="act_ele1">' + activitvatom_list[i] + '</div>');
								$('#main_content_element_nav_child2').children().append('<div class="act_ele">' + activitvatom_list[i+1] + '</div>');
								$('#main_content_element_nav_child3').children().append('<div class="act_ele">' + activitvatom_list[i+2] + '</div>');
								$('#main_content_element_nav_child4').children().append('<div class="act_ele">' + activitvatom_list[i+3] + '</div>');
								$('#main_content_element_nav_child5').children().append('<div class="act_ele">' + activitvatom_list[i+4] + '</div>');
								$('#main_content_element_nav_child6').children().append('<div class="act_ele">' + activitvatom_list[i+5] + '</div>');
								$('#main_content_element_nav_child1').children().children('.act_ele1').on('click', function(e){
									var hh = $(e.target).text();
									hh = hh.replace(/^\s+|\s+$/g, '');
									console.log(hh);
									window.open('/get_pic_activityatom/'+hh);
								});
							}
                        }

                        /*-----------------*/
					});
                    console.log(get_atom_list[0]);
					$('#main_button1').click(function(){
						$('.main_content_element').remove();
						$('.main_content').append('<div class="main_content_element">');
						$('.main_content_element').append('<div class="main_content_element_property ele1"></div><div class="main_content_element_property ele2"></div><div class="main_content_element_property ele3"></div><div class="main_content_element_property ele4"></div><div class="main_content_element_property ele5"></div><div class="main_content_element_property ele6"></div><div class="main_content_element_property ele7"></div><div class="main_content_element_property ele8"></div>');
						$('.ele1').text('相对原子质量 ：'+get_atom_list[0]['相对原子质量']);
						$('.ele2').text('密度 ：'+get_atom_list[0]['密度']);
						$('.ele3').text('熔点 ：'+get_atom_list[0]['熔点']);
						$('.ele4').text('沸点 ：'+get_atom_list[0]['沸点']);
						$('.ele5').text('其他核素：'+get_atom_list[0]['同位素及放射性']);
						$('.ele6').text('状态：'+get_atom_list[0]['状态']);
						$('.ele7').text('来源：'+get_atom_list[0]['来源']);
						$('.ele8').text('用途：'+get_atom_list[0]['用途']);
					});
				},
				error:function(){
					console.log('error');
				},
			});
		});
	}, 2000);
}

function create_window(){
	$('#element_search').append('<div id="mask" class="mask"></div><div class="dialog" id="dialog">');
	$('#dialog').append('<div class="dialog_head" id="move_part"></div><div class="dialog_content"></div><div class="button_content"></div>');
	$('.dialog_content').append('<div class="element_information"></div>');
	$('.button_content').append('<div class="button close_button" id="learn"></div><div class="button close_button" id="close">');
	$('#learn').append('<a>点我了解更多</a>');
	$('#close').append('<a>点我关闭对话框</a>');
	var $dialog = $("#dialog");
	var $mask = $("#mask");
	//点击弹出对话框
	$dialog.css("display", "block");
	$mask.css("display", "block");
	autoCenter($dialog);

	//自动居中对话框
	function autoCenter(el) {
		var bodyW = $(window).width();
		var bodyH = $(window).height();
		var elW = el.width();
		var elH = el.height();
		$dialog.css({
			"left": (bodyW - elW) / 2 + 'px',
			"top": (bodyH - elH) / 2 + 'px'
		});
	}

	// //禁止选中对话框内容
	// if(document.attachEvent) { //ie的事件监听，拖拽div时禁止选中内容，firefox与chrome已在css中设置过-moz-user-select: none; -webkit-user-select: none;
	// 	$('dialog').attachEvent('onselectstart', function() {
	// 		return false;
	// 	});
	// }

	//声明需要用到的变量
	var mx = 0,
		my = 0; //鼠标x、y轴坐标（相对于left，top）
	var dx = 0,
		dy = 0; //对话框坐标（同上）
	var isDraging = false; //不可拖动

	//鼠标按下
	$("#move_part").mousedown(function(e) {
		e = e || window.event;
		mx = e.pageX; //点击时鼠标X坐标
		my = e.pageY; //点击时鼠标Y坐标
		dx = $dialog.offset().left;
		dy = $dialog.offset().top;
		isDraging = true; //标记对话框可拖动                
	});

	//鼠标移动更新窗口位置
	$(document).mousemove(function(e) {
		var e = e || window.event;
		var x = e.pageX; //移动时鼠标X坐标
		var y = e.pageY; //移动时鼠标Y坐标
		if(isDraging) { //判断对话框能否拖动
			var moveX = dx + x - mx; //移动后对话框新的left值
			var moveY = dy + y - my; //移动后对话框新的top值
			//设置拖动范围
			var pageW = $(window).width();
			var pageH = $(window).height();
			var dialogW = $dialog.width();
			var dialogH = $dialog.height();
			var maxX = pageW - dialogW; //X轴可拖动最大值
			var maxY = pageH - dialogH; //Y轴可拖动最大值
			moveX = Math.min(Math.max(0, moveX), maxX); //X轴可拖动范围
			moveY = Math.min(Math.max(0, moveY), maxY); //Y轴可拖动范围
			//重新设置对话框的left、top
			$dialog.css({
				"left": moveX + 'px',
				"top": moveY + 'px'
			});
		}
	});

	//鼠标离开
	$("#move_part").mouseup(function() {
		isDraging = false;
	});

	//点击关闭对话框
	$("#close").click(function() {
		$dialog.remove();
		$mask.remove();
		get_atom_list.splice(0, get_atom_list.length)
	});

	//窗口大小改变时，对话框始终居中
	window.onresize = function() {
		autoCenter($dialog);
	};
}

$(function(){
	cross_field();

	$('document').ready(function(){
		$('.container').toggleClass('display_toggle');
	});
	
	$('#serch_button').on('click', function(){
		$('.container').toggleClass('display_toggle');
	});
		
	$('#keybord_event').on('keydown', function(){
		if(event.keyCode==13){
			var a = $('#keybord_event').val();
			element_list.forEach(function(i){
				if (a === i){
					create_window();
					var abc = element_list.indexOf(i);
					$.ajax({
						url:'/get_atom/'+element_list[abc],
						type:'GET',
						success:function(data){
							get_atom_list.push(data['req_atom']);
							$('.element_information').append('<div class="head_content"></div><div class="main_content"></div>');
							$('.head_content').append('<div class="head_img"></div><div class="head_name 1"></div><div class="head_name 2"></div><div class="head_name 3"></div>');
							$('.main_content').append('<div class="main_content_nav"></div><div class="main_content_element"></div>');
							$('.head_img').append('<img src="/static/element_search/img2/230px-Electron_shell_'+element_list[abc+1]+'_-_no_label.svg.png">');
							$('.1').text('原子序数 : '+get_atom_list[0]['原子序数']);
							$('.2').text('元素名称 : '+get_atom_list[0]['中文名称']+element_list[abc+1]);
							$('.3').text('元素符号 ：'+get_atom_list[0]['元素符号']);
							$('.main_content_nav').append('<button class="main_button" id="main_button1"><button class="main_button" id="main_button2">');
							$('#main_button1').text('元素性质');
							$('#main_button2').text('放射性核素');
							$('.main_content_element').append('<div class="main_content_element_property ele1"></div><div class="main_content_element_property ele2"></div><div class="main_content_element_property ele3"></div><div class="main_content_element_property ele4"></div><div class="main_content_element_property ele5"></div><div class="main_content_element_property ele6"></div><div class="main_content_element_property ele7"></div><div class="main_content_element_property ele8"></div>');
							$('.ele1').text('相对原子质量 ：'+get_atom_list[0]['相对原子质量']);
							$('.ele2').text('密度 ：'+get_atom_list[0]['密度']);
							$('.ele3').text('熔点 ：'+get_atom_list[0]['熔点']);
							$('.ele4').text('沸点 ：'+get_atom_list[0]['沸点']);
							$('.ele5').text('其他核素：'+get_atom_list[0]['同位素及放射性']);
							$('.ele6').text('状态：'+get_atom_list[0]['状态']);
							$('.ele7').text('来源：'+get_atom_list[0]['来源']);
							$('.ele8').text('用途：'+get_atom_list[0]['用途']);
							$('#learn').on('click', function(){
								window.open("https://en.wikipedia.org/wiki/"+element_list[abc+1]);
							});
							console.log(element_list[i]);
							$('#main_button2').click(function(){
								$('.main_content_element').remove();
								$('.main_content').append('<div class="main_content_element">');
								$('.main_content_element').append('<div class="main_content_element_nav">');
								$('.main_content_element_nav').append('<div class="main_content_element_nav_child" id="main_content_element_nav_child1">核素符号</div><div class="main_content_element_nav_child" id="main_content_element_nav_child2">原子序数</div><div class="main_content_element_nav_child" id="main_content_element_nav_child3">衰变字体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child4">衰变能量</div><div class="main_content_element_nav_child" id="main_content_element_nav_child5">衰变母体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child6">半衰期</div>');
								$('#main_content_element_nav_child1').append('<div class="main_content_element_property"></div>');
								$('#main_content_element_nav_child2').append('<div class="main_content_element_property"></div>');
								$('#main_content_element_nav_child3').append('<div class="main_content_element_property"></div>');
								$('#main_content_element_nav_child4').append('<div class="main_content_element_property"></div>');
								$('#main_content_element_nav_child5').append('<div class="main_content_element_property"></div>');
								$('#main_content_element_nav_child6').append('<div class="main_content_element_property"></div>');
								/*-----------------*/
								for(var i=0; i<activitvatom_list.length; i+=6) {
									if (activitvatom_list[i].indexOf(element_list[abc] + '-') != -1) {
										$('#main_content_element_nav_child1').children().append('<div class="act_ele1">' + activitvatom_list[i] + '</div>');
										$('#main_content_element_nav_child2').children().append('<div class="act_ele">' + activitvatom_list[i+1] + '</div>');
										$('#main_content_element_nav_child3').children().append('<div class="act_ele">' + activitvatom_list[i+2] + '</div>');
										$('#main_content_element_nav_child4').children().append('<div class="act_ele">' + activitvatom_list[i+3] + '</div>');
										$('#main_content_element_nav_child5').children().append('<div class="act_ele">' + activitvatom_list[i+4] + '</div>');
										$('#main_content_element_nav_child6').children().append('<div class="act_ele">' + activitvatom_list[i+5] + '</div>');
										$('#main_content_element_nav_child1').children().children('.act_ele1').on('click', function(e){
											var hh = $(e.target).text();
											hh = hh.replace(/^\s+|\s+$/g, '');
											console.log(hh);
											window.open('/get_pic_activityatom/'+hh);
										});
									}
								}
								/*-----------------*/
							});
							console.log(get_atom_list[0]);
							$('#main_button1').click(function(){
								$('.main_content_element').remove();
								$('.main_content').append('<div class="main_content_element">');
								$('.main_content_element').append('<div class="main_content_element_property ele1"></div><div class="main_content_element_property ele2"></div><div class="main_content_element_property ele3"></div><div class="main_content_element_property ele4"></div><div class="main_content_element_property ele5"></div><div class="main_content_element_property ele6"></div><div class="main_content_element_property ele7"></div><div class="main_content_element_property ele8"></div>');
								$('.ele1').text('相对原子质量 ：'+get_atom_list[0]['相对原子质量']);
								$('.ele2').text('密度 ：'+get_atom_list[0]['密度']);
								$('.ele3').text('熔点 ：'+get_atom_list[0]['熔点']);
								$('.ele4').text('沸点 ：'+get_atom_list[0]['沸点']);
								$('.ele5').text('其他核素：'+get_atom_list[0]['同位素及放射性']);
								$('.ele6').text('状态：'+get_atom_list[0]['状态']);
								$('.ele7').text('来源：'+get_atom_list[0]['来源']);
								$('.ele8').text('用途：'+get_atom_list[0]['用途']);
							});
						}
					});
				}
			});
		}
	});
});




