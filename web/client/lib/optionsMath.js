// koka generated module: "optionsMath"
if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(['./std_core', './std_log', './std_path', './common', './options', './optionsSandbox'], function($std_core, $std_log, $std_path, $common, $options, $optionsSandbox) {
"use strict";
 
// koka declarations:
function parseMathRender(options, value, def)  /* (options : options/options, value : string, def : maybe<common/mathrender>) -> maybe<common/mathrender> */  {
  if ((value === "png")) {
    return $std_core.Just($common.Png);
  }
  else {
    if ((value === "svg")) {
      return $std_core.Just($common.Svg);
    }
    else {
      $common.warning(("unrecognized math rendering mode: " + (value + ", expecting one of \'png\' or \'svg\'")), undefined);
      return def;
    }
  }
}
function setMathMode(options, value)  /* (options : options/options, value : string) -> options/options */  {
  var nvalue = $common.normalizeId(value);
  if ((nvalue === "static")) {
    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Static, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  }
  else {
    if ((nvalue === "dynamic")) {
      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Dynamic, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    }
    else {
      if ((nvalue === "mathjax")) {
        var arg_1070 = options;
        var arg_1010 = $options.math(options);
        var arg_1011 = $options.Dynamic;
        var _x1 = $std_core.bool_2($options.mathjax($options.math(options)));
        if (_x1) {
          var _x0 = $options.mathjax($options.math(options));
        }
        else {
          var _x0 = "default";
        }
        var arg_1014 = _x0;
        var arg_1012 = undefined;
        var arg_1013 = undefined;
        var arg_1015 = undefined;
        var arg_1016 = undefined;
        var arg_1017 = undefined;
        var arg_1018 = undefined;
        var arg_1019 = undefined;
        var arg_1020 = undefined;
        var arg_1021 = undefined;
        var arg_1022 = undefined;
        var arg_1023 = undefined;
        var arg_1024 = undefined;
        var arg_1025 = undefined;
        var arg_1026 = undefined;
        var arg_1027 = undefined;
        var arg_1028 = undefined;
        var arg_1029 = undefined;
        var arg_1030 = undefined;
        var arg_1031 = undefined;
        var arg_1032 = undefined;
        var arg_1033 = undefined;
        var arg_1034 = undefined;
        var arg_1035 = undefined;
        var arg_1036 = undefined;
        var arg_1037 = undefined;
        var arg_1117 = $options._copy(arg_1010, arg_1011, arg_1012, arg_1013, arg_1014, arg_1015, arg_1016, arg_1017, arg_1018, arg_1019, arg_1020, arg_1021, arg_1022, arg_1023, arg_1024, arg_1025, arg_1026, arg_1027, arg_1028, arg_1029, arg_1030, arg_1031, arg_1032, arg_1033, arg_1034, arg_1035, arg_1036, arg_1037);
        var arg_1071 = undefined;
        var arg_1072 = undefined;
        var arg_1073 = undefined;
        var arg_1074 = undefined;
        var arg_1075 = undefined;
        var arg_1076 = undefined;
        var arg_1077 = undefined;
        var arg_1078 = undefined;
        var arg_1079 = undefined;
        var arg_1080 = undefined;
        var arg_1081 = undefined;
        var arg_1082 = undefined;
        var arg_1083 = undefined;
        var arg_1084 = undefined;
        var arg_1085 = undefined;
        var arg_1086 = undefined;
        var arg_1087 = undefined;
        var arg_1088 = undefined;
        var arg_1089 = undefined;
        var arg_1090 = undefined;
        var arg_1091 = undefined;
        var arg_1092 = undefined;
        var arg_1093 = undefined;
        var arg_1094 = undefined;
        var arg_1095 = undefined;
        var arg_1096 = undefined;
        var arg_1097 = undefined;
        var arg_1098 = undefined;
        var arg_1099 = undefined;
        var arg_1100 = undefined;
        var arg_1101 = undefined;
        var arg_1102 = undefined;
        var arg_1103 = undefined;
        var arg_1104 = undefined;
        var arg_1105 = undefined;
        var arg_1106 = undefined;
        var arg_1107 = undefined;
        var arg_1108 = undefined;
        var arg_1109 = undefined;
        var arg_1110 = undefined;
        var arg_1111 = undefined;
        var arg_1112 = undefined;
        var arg_1113 = undefined;
        var arg_1114 = undefined;
        var arg_1115 = undefined;
        var arg_1116 = undefined;
        var arg_1118 = undefined;
        var arg_1119 = undefined;
        var arg_1120 = undefined;
        var arg_1121 = undefined;
        var arg_1122 = undefined;
        var arg_1123 = undefined;
        var arg_1124 = undefined;
        var arg_1125 = undefined;
        var arg_1126 = undefined;
        var arg_1127 = undefined;
        var arg_1128 = undefined;
        var arg_1129 = undefined;
        var arg_1130 = undefined;
        var arg_1131 = undefined;
        var arg_1132 = undefined;
        var arg_1133 = undefined;
        return $options._copy_1(arg_1070, arg_1071, arg_1072, arg_1073, arg_1074, arg_1075, arg_1076, arg_1077, arg_1078, arg_1079, arg_1080, arg_1081, arg_1082, arg_1083, arg_1084, arg_1085, arg_1086, arg_1087, arg_1088, arg_1089, arg_1090, arg_1091, arg_1092, arg_1093, arg_1094, arg_1095, arg_1096, arg_1097, arg_1098, arg_1099, arg_1100, arg_1101, arg_1102, arg_1103, arg_1104, arg_1105, arg_1106, arg_1107, arg_1108, arg_1109, arg_1110, arg_1111, arg_1112, arg_1113, arg_1114, arg_1115, arg_1116, arg_1117, arg_1118, arg_1119, arg_1120, arg_1121, arg_1122, arg_1123, arg_1124, arg_1125, arg_1126, arg_1127, arg_1128, arg_1129, arg_1130, arg_1131, arg_1132, arg_1133);
      }
      else {
        $common.warning(("unrecognized math mode: " + nvalue), undefined);
        return options;
      }
    }
  }
}
function updateMath(options, key, lvalue, value, ivalue, bvalue)  /* (options : options/options, key : string, lvalue : string, value : string, ivalue : int, bvalue : bool) -> options/options */  {
  var _x0 = ((key === "mathjax-ext") || (key === "mathjax-extension"));
  if (_x0) {
    var arg_1632 = options;
    var arg_1572 = $options.math(options);
    if ((value === "")) {
      var _x1 = "";
    }
    else {
      var _x1 = ($options.mjext($options.math(options)) + (";" + value));
    }
    var arg_1577 = _x1;
    var arg_1573 = undefined;
    var arg_1574 = undefined;
    var arg_1575 = undefined;
    var arg_1576 = undefined;
    var arg_1578 = undefined;
    var arg_1579 = undefined;
    var arg_1580 = undefined;
    var arg_1581 = undefined;
    var arg_1582 = undefined;
    var arg_1583 = undefined;
    var arg_1584 = undefined;
    var arg_1585 = undefined;
    var arg_1586 = undefined;
    var arg_1587 = undefined;
    var arg_1588 = undefined;
    var arg_1589 = undefined;
    var arg_1590 = undefined;
    var arg_1591 = undefined;
    var arg_1592 = undefined;
    var arg_1593 = undefined;
    var arg_1594 = undefined;
    var arg_1595 = undefined;
    var arg_1596 = undefined;
    var arg_1597 = undefined;
    var arg_1598 = undefined;
    var arg_1599 = undefined;
    var arg_1679 = $options._copy(arg_1572, arg_1573, arg_1574, arg_1575, arg_1576, arg_1577, arg_1578, arg_1579, arg_1580, arg_1581, arg_1582, arg_1583, arg_1584, arg_1585, arg_1586, arg_1587, arg_1588, arg_1589, arg_1590, arg_1591, arg_1592, arg_1593, arg_1594, arg_1595, arg_1596, arg_1597, arg_1598, arg_1599);
    var arg_1633 = undefined;
    var arg_1634 = undefined;
    var arg_1635 = undefined;
    var arg_1636 = undefined;
    var arg_1637 = undefined;
    var arg_1638 = undefined;
    var arg_1639 = undefined;
    var arg_1640 = undefined;
    var arg_1641 = undefined;
    var arg_1642 = undefined;
    var arg_1643 = undefined;
    var arg_1644 = undefined;
    var arg_1645 = undefined;
    var arg_1646 = undefined;
    var arg_1647 = undefined;
    var arg_1648 = undefined;
    var arg_1649 = undefined;
    var arg_1650 = undefined;
    var arg_1651 = undefined;
    var arg_1652 = undefined;
    var arg_1653 = undefined;
    var arg_1654 = undefined;
    var arg_1655 = undefined;
    var arg_1656 = undefined;
    var arg_1657 = undefined;
    var arg_1658 = undefined;
    var arg_1659 = undefined;
    var arg_1660 = undefined;
    var arg_1661 = undefined;
    var arg_1662 = undefined;
    var arg_1663 = undefined;
    var arg_1664 = undefined;
    var arg_1665 = undefined;
    var arg_1666 = undefined;
    var arg_1667 = undefined;
    var arg_1668 = undefined;
    var arg_1669 = undefined;
    var arg_1670 = undefined;
    var arg_1671 = undefined;
    var arg_1672 = undefined;
    var arg_1673 = undefined;
    var arg_1674 = undefined;
    var arg_1675 = undefined;
    var arg_1676 = undefined;
    var arg_1677 = undefined;
    var arg_1678 = undefined;
    var arg_1680 = undefined;
    var arg_1681 = undefined;
    var arg_1682 = undefined;
    var arg_1683 = undefined;
    var arg_1684 = undefined;
    var arg_1685 = undefined;
    var arg_1686 = undefined;
    var arg_1687 = undefined;
    var arg_1688 = undefined;
    var arg_1689 = undefined;
    var arg_1690 = undefined;
    var arg_1691 = undefined;
    var arg_1692 = undefined;
    var arg_1693 = undefined;
    var arg_1694 = undefined;
    var arg_1695 = undefined;
    return $options._copy_1(arg_1632, arg_1633, arg_1634, arg_1635, arg_1636, arg_1637, arg_1638, arg_1639, arg_1640, arg_1641, arg_1642, arg_1643, arg_1644, arg_1645, arg_1646, arg_1647, arg_1648, arg_1649, arg_1650, arg_1651, arg_1652, arg_1653, arg_1654, arg_1655, arg_1656, arg_1657, arg_1658, arg_1659, arg_1660, arg_1661, arg_1662, arg_1663, arg_1664, arg_1665, arg_1666, arg_1667, arg_1668, arg_1669, arg_1670, arg_1671, arg_1672, arg_1673, arg_1674, arg_1675, arg_1676, arg_1677, arg_1678, arg_1679, arg_1680, arg_1681, arg_1682, arg_1683, arg_1684, arg_1685, arg_1686, arg_1687, arg_1688, arg_1689, arg_1690, arg_1691, arg_1692, arg_1693, arg_1694, arg_1695);
  }
  else {
    if ((key === "math-mode")) {
      return setMathMode(options, value);
    }
    else {
      var _x1 = ((key === "math-static") || (key === "math-dir"));
      if (_x1) {
        var arg_2139 = options;
        var arg_2079 = $options.math(options);
        var _x2 = ((lvalue === "true")) ? "math" : value;
        var arg_2085 = _x2;
        var arg_2080 = undefined;
        var arg_2081 = undefined;
        var arg_2082 = undefined;
        var arg_2083 = undefined;
        var arg_2084 = undefined;
        var arg_2086 = undefined;
        var arg_2087 = undefined;
        var arg_2088 = undefined;
        var arg_2089 = undefined;
        var arg_2090 = undefined;
        var arg_2091 = undefined;
        var arg_2092 = undefined;
        var arg_2093 = undefined;
        var arg_2094 = undefined;
        var arg_2095 = undefined;
        var arg_2096 = undefined;
        var arg_2097 = undefined;
        var arg_2098 = undefined;
        var arg_2099 = undefined;
        var arg_2100 = undefined;
        var arg_2101 = undefined;
        var arg_2102 = undefined;
        var arg_2103 = undefined;
        var arg_2104 = undefined;
        var arg_2105 = undefined;
        var arg_2106 = undefined;
        var arg_2186 = $options._copy(arg_2079, arg_2080, arg_2081, arg_2082, arg_2083, arg_2084, arg_2085, arg_2086, arg_2087, arg_2088, arg_2089, arg_2090, arg_2091, arg_2092, arg_2093, arg_2094, arg_2095, arg_2096, arg_2097, arg_2098, arg_2099, arg_2100, arg_2101, arg_2102, arg_2103, arg_2104, arg_2105, arg_2106);
        var arg_2140 = undefined;
        var arg_2141 = undefined;
        var arg_2142 = undefined;
        var arg_2143 = undefined;
        var arg_2144 = undefined;
        var arg_2145 = undefined;
        var arg_2146 = undefined;
        var arg_2147 = undefined;
        var arg_2148 = undefined;
        var arg_2149 = undefined;
        var arg_2150 = undefined;
        var arg_2151 = undefined;
        var arg_2152 = undefined;
        var arg_2153 = undefined;
        var arg_2154 = undefined;
        var arg_2155 = undefined;
        var arg_2156 = undefined;
        var arg_2157 = undefined;
        var arg_2158 = undefined;
        var arg_2159 = undefined;
        var arg_2160 = undefined;
        var arg_2161 = undefined;
        var arg_2162 = undefined;
        var arg_2163 = undefined;
        var arg_2164 = undefined;
        var arg_2165 = undefined;
        var arg_2166 = undefined;
        var arg_2167 = undefined;
        var arg_2168 = undefined;
        var arg_2169 = undefined;
        var arg_2170 = undefined;
        var arg_2171 = undefined;
        var arg_2172 = undefined;
        var arg_2173 = undefined;
        var arg_2174 = undefined;
        var arg_2175 = undefined;
        var arg_2176 = undefined;
        var arg_2177 = undefined;
        var arg_2178 = undefined;
        var arg_2179 = undefined;
        var arg_2180 = undefined;
        var arg_2181 = undefined;
        var arg_2182 = undefined;
        var arg_2183 = undefined;
        var arg_2184 = undefined;
        var arg_2185 = undefined;
        var arg_2187 = undefined;
        var arg_2188 = undefined;
        var arg_2189 = undefined;
        var arg_2190 = undefined;
        var arg_2191 = undefined;
        var arg_2192 = undefined;
        var arg_2193 = undefined;
        var arg_2194 = undefined;
        var arg_2195 = undefined;
        var arg_2196 = undefined;
        var arg_2197 = undefined;
        var arg_2198 = undefined;
        var arg_2199 = undefined;
        var arg_2200 = undefined;
        var arg_2201 = undefined;
        var arg_2202 = undefined;
        return $options._copy_1(arg_2139, arg_2140, arg_2141, arg_2142, arg_2143, arg_2144, arg_2145, arg_2146, arg_2147, arg_2148, arg_2149, arg_2150, arg_2151, arg_2152, arg_2153, arg_2154, arg_2155, arg_2156, arg_2157, arg_2158, arg_2159, arg_2160, arg_2161, arg_2162, arg_2163, arg_2164, arg_2165, arg_2166, arg_2167, arg_2168, arg_2169, arg_2170, arg_2171, arg_2172, arg_2173, arg_2174, arg_2175, arg_2176, arg_2177, arg_2178, arg_2179, arg_2180, arg_2181, arg_2182, arg_2183, arg_2184, arg_2185, arg_2186, arg_2187, arg_2188, arg_2189, arg_2190, arg_2191, arg_2192, arg_2193, arg_2194, arg_2195, arg_2196, arg_2197, arg_2198, arg_2199, arg_2200, arg_2201, arg_2202);
      }
      else {
        if ((key === "math-scale")) {
          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        }
        else {
          if ((key === "math-scale-svg")) {
            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
          }
          else {
            if ((key === "math-scale-png")) {
              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            }
            else {
              if ((key === "math-baseline")) {
                return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              }
              else {
                if ((key === "math-dpi")) {
                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ivalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                }
                else {
                  var _x2 = ((key === "math-embed") || (key === "math-embed-limit"));
                  if (_x2) {
                    var arg_4119 = options;
                    var arg_4059 = $options.math(options);
                    if ((value === "")) {
                      var _x3 = 0;
                    }
                    else {
                      var _x3 = ((value === "true")) ? 1024 : $std_core.intMultiply(ivalue,1024);
                    }
                    var arg_4071 = _x3;
                    var arg_4060 = undefined;
                    var arg_4061 = undefined;
                    var arg_4062 = undefined;
                    var arg_4063 = undefined;
                    var arg_4064 = undefined;
                    var arg_4065 = undefined;
                    var arg_4066 = undefined;
                    var arg_4067 = undefined;
                    var arg_4068 = undefined;
                    var arg_4069 = undefined;
                    var arg_4070 = undefined;
                    var arg_4072 = undefined;
                    var arg_4073 = undefined;
                    var arg_4074 = undefined;
                    var arg_4075 = undefined;
                    var arg_4076 = undefined;
                    var arg_4077 = undefined;
                    var arg_4078 = undefined;
                    var arg_4079 = undefined;
                    var arg_4080 = undefined;
                    var arg_4081 = undefined;
                    var arg_4082 = undefined;
                    var arg_4083 = undefined;
                    var arg_4084 = undefined;
                    var arg_4085 = undefined;
                    var arg_4086 = undefined;
                    var arg_4166 = $options._copy(arg_4059, arg_4060, arg_4061, arg_4062, arg_4063, arg_4064, arg_4065, arg_4066, arg_4067, arg_4068, arg_4069, arg_4070, arg_4071, arg_4072, arg_4073, arg_4074, arg_4075, arg_4076, arg_4077, arg_4078, arg_4079, arg_4080, arg_4081, arg_4082, arg_4083, arg_4084, arg_4085, arg_4086);
                    var arg_4120 = undefined;
                    var arg_4121 = undefined;
                    var arg_4122 = undefined;
                    var arg_4123 = undefined;
                    var arg_4124 = undefined;
                    var arg_4125 = undefined;
                    var arg_4126 = undefined;
                    var arg_4127 = undefined;
                    var arg_4128 = undefined;
                    var arg_4129 = undefined;
                    var arg_4130 = undefined;
                    var arg_4131 = undefined;
                    var arg_4132 = undefined;
                    var arg_4133 = undefined;
                    var arg_4134 = undefined;
                    var arg_4135 = undefined;
                    var arg_4136 = undefined;
                    var arg_4137 = undefined;
                    var arg_4138 = undefined;
                    var arg_4139 = undefined;
                    var arg_4140 = undefined;
                    var arg_4141 = undefined;
                    var arg_4142 = undefined;
                    var arg_4143 = undefined;
                    var arg_4144 = undefined;
                    var arg_4145 = undefined;
                    var arg_4146 = undefined;
                    var arg_4147 = undefined;
                    var arg_4148 = undefined;
                    var arg_4149 = undefined;
                    var arg_4150 = undefined;
                    var arg_4151 = undefined;
                    var arg_4152 = undefined;
                    var arg_4153 = undefined;
                    var arg_4154 = undefined;
                    var arg_4155 = undefined;
                    var arg_4156 = undefined;
                    var arg_4157 = undefined;
                    var arg_4158 = undefined;
                    var arg_4159 = undefined;
                    var arg_4160 = undefined;
                    var arg_4161 = undefined;
                    var arg_4162 = undefined;
                    var arg_4163 = undefined;
                    var arg_4164 = undefined;
                    var arg_4165 = undefined;
                    var arg_4167 = undefined;
                    var arg_4168 = undefined;
                    var arg_4169 = undefined;
                    var arg_4170 = undefined;
                    var arg_4171 = undefined;
                    var arg_4172 = undefined;
                    var arg_4173 = undefined;
                    var arg_4174 = undefined;
                    var arg_4175 = undefined;
                    var arg_4176 = undefined;
                    var arg_4177 = undefined;
                    var arg_4178 = undefined;
                    var arg_4179 = undefined;
                    var arg_4180 = undefined;
                    var arg_4181 = undefined;
                    var arg_4182 = undefined;
                    return $options._copy_1(arg_4119, arg_4120, arg_4121, arg_4122, arg_4123, arg_4124, arg_4125, arg_4126, arg_4127, arg_4128, arg_4129, arg_4130, arg_4131, arg_4132, arg_4133, arg_4134, arg_4135, arg_4136, arg_4137, arg_4138, arg_4139, arg_4140, arg_4141, arg_4142, arg_4143, arg_4144, arg_4145, arg_4146, arg_4147, arg_4148, arg_4149, arg_4150, arg_4151, arg_4152, arg_4153, arg_4154, arg_4155, arg_4156, arg_4157, arg_4158, arg_4159, arg_4160, arg_4161, arg_4162, arg_4163, arg_4164, arg_4165, arg_4166, arg_4167, arg_4168, arg_4169, arg_4170, arg_4171, arg_4172, arg_4173, arg_4174, arg_4175, arg_4176, arg_4177, arg_4178, arg_4179, arg_4180, arg_4181, arg_4182);
                  }
                  else {
                    var _x3 = ((key === "math-document-class") || (key === "math-doc-class"));
                    if (_x3) {
                      return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                    }
                    else {
                      if ((key === "math-render")) {
                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, parseMathRender(options, lvalue, $options.render($options.math(options))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                      }
                      else {
                        if ((key === "math-render-full")) {
                          return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, parseMathRender(options, lvalue, $options.renderFull($options.math(options))), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                        }
                        else {
                          if ((key === "math-svg-share-paths")) {
                            return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, bvalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                          }
                          else {
                            if ((key === "math-svg-precision")) {
                              return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $std_core.min(6, $std_core.max(ivalue, 0)), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                            }
                            else {
                              if ((key === "math-svg-use-fonts")) {
                                var arg_6072 = options;
                                var arg_6012 = $options.math(options);
                                var _x4 = (bvalue) ? "woff,ah" : "none";
                                var arg_6029 = _x4;
                                var arg_6013 = undefined;
                                var arg_6014 = undefined;
                                var arg_6015 = undefined;
                                var arg_6016 = undefined;
                                var arg_6017 = undefined;
                                var arg_6018 = undefined;
                                var arg_6019 = undefined;
                                var arg_6020 = undefined;
                                var arg_6021 = undefined;
                                var arg_6022 = undefined;
                                var arg_6023 = undefined;
                                var arg_6024 = undefined;
                                var arg_6025 = undefined;
                                var arg_6026 = undefined;
                                var arg_6027 = undefined;
                                var arg_6028 = undefined;
                                var arg_6030 = undefined;
                                var arg_6031 = undefined;
                                var arg_6032 = undefined;
                                var arg_6033 = undefined;
                                var arg_6034 = undefined;
                                var arg_6035 = undefined;
                                var arg_6036 = undefined;
                                var arg_6037 = undefined;
                                var arg_6038 = undefined;
                                var arg_6039 = undefined;
                                var arg_6119 = $options._copy(arg_6012, arg_6013, arg_6014, arg_6015, arg_6016, arg_6017, arg_6018, arg_6019, arg_6020, arg_6021, arg_6022, arg_6023, arg_6024, arg_6025, arg_6026, arg_6027, arg_6028, arg_6029, arg_6030, arg_6031, arg_6032, arg_6033, arg_6034, arg_6035, arg_6036, arg_6037, arg_6038, arg_6039);
                                var arg_6073 = undefined;
                                var arg_6074 = undefined;
                                var arg_6075 = undefined;
                                var arg_6076 = undefined;
                                var arg_6077 = undefined;
                                var arg_6078 = undefined;
                                var arg_6079 = undefined;
                                var arg_6080 = undefined;
                                var arg_6081 = undefined;
                                var arg_6082 = undefined;
                                var arg_6083 = undefined;
                                var arg_6084 = undefined;
                                var arg_6085 = undefined;
                                var arg_6086 = undefined;
                                var arg_6087 = undefined;
                                var arg_6088 = undefined;
                                var arg_6089 = undefined;
                                var arg_6090 = undefined;
                                var arg_6091 = undefined;
                                var arg_6092 = undefined;
                                var arg_6093 = undefined;
                                var arg_6094 = undefined;
                                var arg_6095 = undefined;
                                var arg_6096 = undefined;
                                var arg_6097 = undefined;
                                var arg_6098 = undefined;
                                var arg_6099 = undefined;
                                var arg_6100 = undefined;
                                var arg_6101 = undefined;
                                var arg_6102 = undefined;
                                var arg_6103 = undefined;
                                var arg_6104 = undefined;
                                var arg_6105 = undefined;
                                var arg_6106 = undefined;
                                var arg_6107 = undefined;
                                var arg_6108 = undefined;
                                var arg_6109 = undefined;
                                var arg_6110 = undefined;
                                var arg_6111 = undefined;
                                var arg_6112 = undefined;
                                var arg_6113 = undefined;
                                var arg_6114 = undefined;
                                var arg_6115 = undefined;
                                var arg_6116 = undefined;
                                var arg_6117 = undefined;
                                var arg_6118 = undefined;
                                var arg_6120 = undefined;
                                var arg_6121 = undefined;
                                var arg_6122 = undefined;
                                var arg_6123 = undefined;
                                var arg_6124 = undefined;
                                var arg_6125 = undefined;
                                var arg_6126 = undefined;
                                var arg_6127 = undefined;
                                var arg_6128 = undefined;
                                var arg_6129 = undefined;
                                var arg_6130 = undefined;
                                var arg_6131 = undefined;
                                var arg_6132 = undefined;
                                var arg_6133 = undefined;
                                var arg_6134 = undefined;
                                var arg_6135 = undefined;
                                return $options._copy_1(arg_6072, arg_6073, arg_6074, arg_6075, arg_6076, arg_6077, arg_6078, arg_6079, arg_6080, arg_6081, arg_6082, arg_6083, arg_6084, arg_6085, arg_6086, arg_6087, arg_6088, arg_6089, arg_6090, arg_6091, arg_6092, arg_6093, arg_6094, arg_6095, arg_6096, arg_6097, arg_6098, arg_6099, arg_6100, arg_6101, arg_6102, arg_6103, arg_6104, arg_6105, arg_6106, arg_6107, arg_6108, arg_6109, arg_6110, arg_6111, arg_6112, arg_6113, arg_6114, arg_6115, arg_6116, arg_6117, arg_6118, arg_6119, arg_6120, arg_6121, arg_6122, arg_6123, arg_6124, arg_6125, arg_6126, arg_6127, arg_6128, arg_6129, arg_6130, arg_6131, arg_6132, arg_6133, arg_6134, arg_6135);
                              }
                              else {
                                if ((key === "math-svg-font-format")) {
                                  return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, lvalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                }
                                else {
                                  if ((key === "math-svg-bbox-exact")) {
                                    return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, bvalue, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                  }
                                  else {
                                    if ((key === "mathjax")) {
                                      if ((value !== "")) {
                                        var arg_7099 = options;
                                        var arg_7039 = $options.math(options);
                                        var arg_7040 = $options.Dynamic;
                                        var _x4 = ((lvalue === "true")) ? "default" : value;
                                        var arg_7043 = _x4;
                                        var arg_7041 = undefined;
                                        var arg_7042 = undefined;
                                        var arg_7044 = undefined;
                                        var arg_7045 = undefined;
                                        var arg_7046 = undefined;
                                        var arg_7047 = undefined;
                                        var arg_7048 = undefined;
                                        var arg_7049 = undefined;
                                        var arg_7050 = undefined;
                                        var arg_7051 = undefined;
                                        var arg_7052 = undefined;
                                        var arg_7053 = undefined;
                                        var arg_7054 = undefined;
                                        var arg_7055 = undefined;
                                        var arg_7056 = undefined;
                                        var arg_7057 = undefined;
                                        var arg_7058 = undefined;
                                        var arg_7059 = undefined;
                                        var arg_7060 = undefined;
                                        var arg_7061 = undefined;
                                        var arg_7062 = undefined;
                                        var arg_7063 = undefined;
                                        var arg_7064 = undefined;
                                        var arg_7065 = undefined;
                                        var arg_7066 = undefined;
                                        var arg_7146 = $options._copy(arg_7039, arg_7040, arg_7041, arg_7042, arg_7043, arg_7044, arg_7045, arg_7046, arg_7047, arg_7048, arg_7049, arg_7050, arg_7051, arg_7052, arg_7053, arg_7054, arg_7055, arg_7056, arg_7057, arg_7058, arg_7059, arg_7060, arg_7061, arg_7062, arg_7063, arg_7064, arg_7065, arg_7066);
                                        var arg_7100 = undefined;
                                        var arg_7101 = undefined;
                                        var arg_7102 = undefined;
                                        var arg_7103 = undefined;
                                        var arg_7104 = undefined;
                                        var arg_7105 = undefined;
                                        var arg_7106 = undefined;
                                        var arg_7107 = undefined;
                                        var arg_7108 = undefined;
                                        var arg_7109 = undefined;
                                        var arg_7110 = undefined;
                                        var arg_7111 = undefined;
                                        var arg_7112 = undefined;
                                        var arg_7113 = undefined;
                                        var arg_7114 = undefined;
                                        var arg_7115 = undefined;
                                        var arg_7116 = undefined;
                                        var arg_7117 = undefined;
                                        var arg_7118 = undefined;
                                        var arg_7119 = undefined;
                                        var arg_7120 = undefined;
                                        var arg_7121 = undefined;
                                        var arg_7122 = undefined;
                                        var arg_7123 = undefined;
                                        var arg_7124 = undefined;
                                        var arg_7125 = undefined;
                                        var arg_7126 = undefined;
                                        var arg_7127 = undefined;
                                        var arg_7128 = undefined;
                                        var arg_7129 = undefined;
                                        var arg_7130 = undefined;
                                        var arg_7131 = undefined;
                                        var arg_7132 = undefined;
                                        var arg_7133 = undefined;
                                        var arg_7134 = undefined;
                                        var arg_7135 = undefined;
                                        var arg_7136 = undefined;
                                        var arg_7137 = undefined;
                                        var arg_7138 = undefined;
                                        var arg_7139 = undefined;
                                        var arg_7140 = undefined;
                                        var arg_7141 = undefined;
                                        var arg_7142 = undefined;
                                        var arg_7143 = undefined;
                                        var arg_7144 = undefined;
                                        var arg_7145 = undefined;
                                        var arg_7147 = undefined;
                                        var arg_7148 = undefined;
                                        var arg_7149 = undefined;
                                        var arg_7150 = undefined;
                                        var arg_7151 = undefined;
                                        var arg_7152 = undefined;
                                        var arg_7153 = undefined;
                                        var arg_7154 = undefined;
                                        var arg_7155 = undefined;
                                        var arg_7156 = undefined;
                                        var arg_7157 = undefined;
                                        var arg_7158 = undefined;
                                        var arg_7159 = undefined;
                                        var arg_7160 = undefined;
                                        var arg_7161 = undefined;
                                        var arg_7162 = undefined;
                                        return $options._copy_1(arg_7099, arg_7100, arg_7101, arg_7102, arg_7103, arg_7104, arg_7105, arg_7106, arg_7107, arg_7108, arg_7109, arg_7110, arg_7111, arg_7112, arg_7113, arg_7114, arg_7115, arg_7116, arg_7117, arg_7118, arg_7119, arg_7120, arg_7121, arg_7122, arg_7123, arg_7124, arg_7125, arg_7126, arg_7127, arg_7128, arg_7129, arg_7130, arg_7131, arg_7132, arg_7133, arg_7134, arg_7135, arg_7136, arg_7137, arg_7138, arg_7139, arg_7140, arg_7141, arg_7142, arg_7143, arg_7144, arg_7145, arg_7146, arg_7147, arg_7148, arg_7149, arg_7150, arg_7151, arg_7152, arg_7153, arg_7154, arg_7155, arg_7156, arg_7157, arg_7158, arg_7159, arg_7160, arg_7161, arg_7162);
                                      }
                                      else {
                                        return $options._copy_1(options, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, $options._copy($options.math(options), $options.Static, undefined, undefined, "", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                                      }
                                    }
                                    else {
                                      return $optionsSandbox.updateSandbox(options, key, lvalue, value, ivalue);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 
// koka exports:
return { 'parseMathRender': parseMathRender, 'setMathMode': setMathMode, 'updateMath': updateMath };
});