"use strict";

import { header } from "./View/header/header.js";
import { main } from "./View/main/main.js";

const body = document.body;
body.append(header);
body.append(main);