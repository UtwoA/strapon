export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "ru"];
export const LOCALE_STORAGE_KEY = "strapon-ton-locale";

export const contactLinks = {
  telegram: {
    label: "telegram",
    href: "https://t.me/strapon_ton",
  },
  github: {
    label: "github",
    href: "https://github.com/strapon-ton",
  },
};

export const siteContent = {
  en: {
    ui: {
      brand: "strapon.tech",
      openSystem: "open the machine",
      impossible: "impossible? perfect.",
      copyDomain: "copy domain",
      copiedDomain: "copied strapon.tech",
      manualCopy: "copy strapon.tech manually",
      localeLabel: "language",
      telemetryQuiet: "terminal quiet, signal loud",
      finalQuestion: "need something nasty built?",
      finalNote: "friends, clients, weirdos - if it needs shipping, we talk.",
      metricsHints: "all paths remain live",
      secretDormant: "secret system dormant",
      secretWake: "press / or ctrl+k to wake it",
      secretShell: "hidden operator shell",
      secretClose: "esc://close",
      secretResponse: "response layer",
      secretPayload: "dormant payload",
      secretHints: "keyboard hints",
      classifiedOverlay: "classified overlay",
      commandHints: [
        "/ opens the shell",
        "ctrl+k also opens it",
        "/chaos increases signal density",
        "/clear restores the calm lie",
      ],
      unknownCommandTitle: "unknown command",
      unknownCommandBody: "The machine heard you. It did not care.",
    },
    boot: {
      topLeft: "no brochure. just proof.",
      topRight: "friends only / real work only",
      booting: "booting strapon.tech",
      state: "monument state",
      profile: "operator profile",
      profileBody:
        "60+ repos, a stupidly broad stack, and zero fear of weird, ugly, high-stakes work.",
      proof: {
        title: "proof / no cosplay",
        caption: "this is where the flex turns into evidence",
        items: [
          "60+ GitHub repos",
          "frontend to infra",
          "ML / AI / data",
          "VPN / proxy / deploys",
        ],
      },
      instability: "ambient instability",
      tags: ["backend", "infra", "telegram", "ai workflows", "shipping fast"],
      logs: [
        "> waking the machine...",
        "> checking the stack...",
        "> reconnecting the wild parts...",
        "> redis online",
        "> postgres online",
        "> telegram gateways online",
        "> ai pipelines unstable",
        "> proxy mesh synchronized",
        "> docker daemon still being a dick",
        "> uptime: ugly but alive",
        "> mental state: shipping",
      ],
      statements: [
        "i do not live in one lane.",
        "i ship the messy stuff too.",
        "if it can be built, wired, deployed, or rescued - i can probably do it.",
        "the stack is wide because the work is wide.",
      ],
    },
    identity: {
      eyebrow: "identity / no-cosplay layer",
      title: ["no one-lane", "no cute", "roleplay."],
      body:
        "I do not need to pretend I am only frontend, only backend, or only infra. The job changes, so I change with it.",
      lines: [
        "I do not make little brochure sites.",
        "I build systems people actually use.",
        "Sometimes the whole product stack.",
        "Frontend.",
        "Backend.",
        "Data.",
        "ML / AI.",
        "Infra.",
        "Bots.",
        "Payments.",
        "VPN / proxy / ops.",
        "If the task is weird, even better.",
      ],
      quote:
        '"sometimes this stops being development and starts being owning the whole damn machine."',
    },
    chaos: {
      eyebrow: "chaos / big-range layer",
      title: ["too much", "for one", "lane."],
      body:
        "The point is not polish for polish's sake. The point is range: products, pipelines, infra, AI, deployments, and the glue that keeps all of it from falling apart.",
      payload: "active payload names",
      unstable: "unstable visibility",
      feed: "fake operator feed",
      pressure: "branch rot / service pressure",
      branches: ["origin/main", "feature/mesh-retry", "ops/panic-hotfix"],
      projects: [
        "more-stars",
        "unlimy",
        "relay",
        "analytics",
        "vpn mesh",
        "transformers",
        "workers",
        "tg infra",
        "orchestration",
        "monitoring",
        "proxy routing",
        "payment systems",
        "automation layers",
        "distributed pipelines",
        "scrapers",
        "experiments",
        "side-projects",
        "unfinished weapons",
      ],
      signals: [
        "commit 9c1fd2 - hotfix/retry-mesh",
        "deploy/main -> fra1-vps-03",
        "queue.redis backlog: 142",
        "worker.ai.infer status: throttled",
        "ssh root@hel1-core active",
        "telegram.event stream burst x48",
        "branch/unstable-operator merged",
        "proxy.mesh sync delta: 02",
        "postgres vacuum overdue",
        "ci/cd pipeline rerun with spite",
        "api /payments/reconcile 200",
        "scraper cluster woke up again",
        "tg-gift-worker lag detected",
        "payments-sync resumed after backpressure",
        "relay-beat heartbeat nominal",
        "anti-abuse model confidence dipped",
        "fallback-gateway warmed in iad-01",
        "orchestration-layer deferred cleanup",
      ],
    },
    silence: {
      label: "noise floor dropped / signal stays",
      lines: [
        "good.",
        "the queue survived. the product survived. i survived.",
        "production remembers everything, so ship like it.",
        "some systems do not sleep. neither do the people running them.",
      ],
    },
    ego: {
      eyebrow: "ego / earned by shipping",
      lines: [
        "most developers ship one layer.",
        "i ship the whole stack.",
        "people call it overengineering.",
        "then the edge cases arrive.",
        "production is the only serious review.",
        "pretty code that dies in incidents is decorative nonsense.",
        "speed matters.",
        "breadth matters.",
        "shipping matters.",
      ],
    },
    legend: {
      eyebrow: "legend / operational mass",
      title: ["not just a dev.", "a guy who", "actually ships."],
      body:
        "The myth works when the surface area is huge but still coherent. Services, queues, workers, products, clients, weird requests - it all needs to stay alive.",
      serviceGraph: "service graph fragments",
      allPaths: "all paths remain live",
      dependency: "dependency mesh active",
      incidents: "incident memory",
      throughput: "atmospheric throughput",
      atmosphere: [
        ["packet-noise", "present"],
        ["crt-hum", "implied"],
        ["server-room", "breathing"],
        ["distant alarms", "muted"],
      ],
    },
    machine: {
      eyebrow: "the machine / private internet empire",
      title: ["production", "is the only", "real judge."],
      body:
        "This is not a polite portfolio. It is a control room for the kind of work where frontend, backend, data, infra, and AI all touch each other.",
      clusterMap: "cluster map",
      observability: "observability alerts",
      stats: [
        { label: "github repos", value: "60+", tone: "text" },
        { label: "stack width", value: "wide", tone: "electric" },
        { label: "client trust", value: "friends first", tone: "toxic" },
        { label: "delivery mode", value: "full send", tone: "danger" },
      ],
      panels: [
        {
          title: "more-stars / commerce core",
          body:
            "Telegram commerce infra, payment routing, event flow discipline, and the boring stuff that makes money move without drama.",
          metrics: ["latency 18ms", "workers 07", "risk low"],
        },
        {
          title: "relay / proxy control plane",
          body:
            "Fallback-aware routing for when upstream reality gets flaky and you still need the thing to work.",
          metrics: ["mesh synced", "failover armed", "egress green"],
        },
        {
          title: "analytics / product telemetry",
          body:
            "Turns user movement, bot events, and operator noise into product signal that is actually useful.",
          metrics: ["signals 144", "dashboards live", "events noisy"],
        },
        {
          title: "orchestration-layer / queue-recovery",
          body:
            "Keeps workers, retries, and fallback queues from turning incidents into folklore.",
          metrics: ["drain 91%", "retries paced", "incident debt low"],
        },
      ],
      alerts: [
        "wireguard edge synchronized",
        "nginx reload completed",
        "worker pool stabilized",
        "grafana ghost panel alive",
        "postgres locks acceptable",
        "ai pipeline drift detected",
        "queue-recovery entering watch state",
        "node-health mismatch in waw-edge",
      ],
    },
    cases: {
      eyebrow: "case vault / actual shipped work",
      title: ["proof over", "vibes."],
      body:
        "The style is loud on purpose. The receipts stay louder. These are the kinds of projects I build when the task is real and the edge cases are annoying.",
      items: [
        {
          name: "more-stars / telegram commerce",
          summary:
            "Service for selling Telegram stars and gifts with the boring parts handled properly: routing, reliability, and a product flow that does not fall apart.",
          stack: ["telegram bot", "payments", "commerce flow", "delivery"],
          result: "built for moving money and keeping ops sane",
          links: [
            { label: "repo", href: "https://github.com/UtwoA/more-stars" },
            { label: "bot", href: "https://t.me/more_stars_bot" },
          ],
        },
        {
          name: "unlimy / vpn service",
          summary:
            "My own VPN service. This is infra, routing, uptime, and customer-facing delivery wrapped into one thing that has to just work.",
          stack: ["vpn", "infra", "routing", "support"],
          result: "private internet plumbing with real constraints",
          links: [{ label: "bot", href: "https://t.me/unlimy_bot" }],
        },
        {
          name: "unlimy relay / mtproto config delivery",
          summary:
            "Auto-issued MTProto configs through a relay layer. Less ceremony, more reliable distribution.",
          stack: ["mtproto", "relay", "automation", "config delivery"],
          result: "a clean way to ship configs without hand-holding",
          links: [{ label: "repo", href: "https://github.com/UtwoA/unlimy-relay" }],
        },
        {
          name: "asic hub / vpn operations",
          summary:
            "A VPN hub for ASIC operations, where operational simplicity matters more than pretty language.",
          stack: ["vpn", "ops", "hardware", "admin flow"],
          result: "keeps the weird hardware side usable",
          links: [{ label: "repo", href: "https://github.com/UtwoA/ASIC_Hub_VPN" }],
        },
        {
          name: "unlimy flow / ai posts",
          summary:
            "AI model for generating posts. Useful when the job is not just making text, but making something that can actually produce output.",
          stack: ["ai", "content", "generation", "workflow"],
          result: "model-driven posting pipeline with an actual use case",
          links: [{ label: "repo", href: "https://github.com/unlimy-org/unlimy-flow" }],
        },
      ],
    },
    telemetry: {
      seeds: [
        { label: "active services", value: 27, suffix: "", tone: "text" },
        { label: "healthy nodes", value: 18, suffix: "", tone: "electric" },
        { label: "degraded regions", value: 2, suffix: "", tone: "danger" },
        { label: "deploys this week", value: 43, suffix: "", tone: "toxic" },
        { label: "proxy throughput", value: 184, suffix: "mb/s", tone: "electric" },
        { label: "ai workload", value: 73, suffix: "%", tone: "toxic" },
      ],
    },
    shared: {
      services: [
        "tg-gift-worker",
        "payments-sync",
        "queue-recovery",
        "relay-beat",
        "anti-abuse",
        "node-health",
        "orchestration-layer",
        "ai-routing",
        "fallback-gateway",
        "proxy-mesh",
        "stars-fulfillment",
        "packet-telemetry",
      ],
      incidents: [
        "incident/4421: relay mesh entered degraded visibility",
        "incident/4421: fallback-gateway promoted in fra1",
        "incident/4422: stars-fulfillment queue saturation avoided",
        "incident/4423: anti-abuse false-positive cluster contained",
        "incident/4424: ai-routing drift acknowledged, not fatal",
      ],
      secretCommands: {
        "/help": {
          title: "available commands",
          body: "Use /mental-state, /uptime, /sleep, /projects, /chaos, /deploy, /incident, /clear.",
          mode: "help",
        },
        "/ru": {
          title: "easter egg",
          body: "Russian easter egg: живая пасхалка for people who dig deeper.",
          mode: "projects",
        },
        "/mental-state": {
          title: "mental state",
          body: "production. slightly dissociated. still shipping.",
          mode: "danger",
        },
        "/sleep": {
          title: "sleep report",
          body: "sleep is currently behind a feature flag.",
          mode: "toxic",
        },
        "/projects": {
          title: "active payload",
          body: "more-stars, unlimy, relay, analytics, mesh, workers, experiments, strange new problems.",
          mode: "projects",
        },
        "/uptime": {
          title: "uptime report",
          body: "services unstable. operator present. machine still breathing.",
          mode: "observability",
        },
        "/chaos": {
          title: "chaos mode",
          body: "overlay density raised. good luck reading the machine.",
          mode: "chaos",
        },
        "/deploy": {
          title: "deploy memory",
          body: "build. test. push. watch metrics. pretend calm. repeat.",
          mode: "deploy",
        },
        "/incident": {
          title: "incident archive",
          body: "The incident is over. The architecture remembers.",
          mode: "incident",
        },
        "/panic": {
          title: "panic acknowledged",
          body: "panic is not a blocker. deploy anyway.",
          mode: "danger",
        },
      },
    },
  },
  ru: {
    ui: {
      brand: "strapon.tech",
      openSystem: "открыть машину",
      impossible: "невозможно? отлично.",
      copyDomain: "копировать домен",
      copiedDomain: "скопировано strapon.tech",
      manualCopy: "скопируй strapon.tech вручную",
      localeLabel: "язык",
      telemetryQuiet: "терминал затих, сигнал нет",
      finalQuestion: "нужно собрать что-то злое и рабочее?",
      finalNote: "свои, кенты, клиенты - если надо тащить, значит тащим.",
      metricsHints: "все маршруты остаются живыми",
      secretDormant: "секретная система спит",
      secretWake: "нажми / или ctrl+k чтобы разбудить её",
      secretShell: "скрытая операторская оболочка",
      secretClose: "esc://close",
      secretResponse: "слой ответа",
      secretPayload: "спящий payload",
      secretHints: "подсказки",
      classifiedOverlay: "закрытый оверлей",
      commandHints: [
        "/ открывает оболочку",
        "ctrl+k тоже открывает её",
        "/chaos поднимает плотность сигнала",
        "/clear возвращает спокойную ложь",
      ],
      unknownCommandTitle: "неизвестная команда",
      unknownCommandBody: "Машина услышала тебя. Ей было всё равно.",
    },
    boot: {
      topLeft: "не резюме. а доказуха.",
      topRight: "для своих / без галстука",
      booting: "запуск strapon.tech",
      state: "состояние монумента",
      profile: "профиль оператора",
      profileBody:
        "60+ репозиториев, огромный стек и привычка не ныть, когда задача выходит за рамки одного направления.",
      proof: {
        title: "доказуха / без понтов",
        caption: "тут цифры, а не только ор",
        items: [
          "60+ GitHub repos",
          "frontend -> infra",
          "ML / AI / data",
          "VPN / proxy / deploys",
        ],
      },
      instability: "фоновая нестабильность",
      tags: ["backend", "infra", "telegram", "ai workflows", "быстрый шип"],
      logs: [
        "> просыпаю машину...",
        "> проверяю стек...",
        "> возвращаю в строй все живое...",
        "> redis online",
        "> postgres online",
        "> telegram gateways online",
        "> ai pipelines unstable",
        "> proxy mesh synchronized",
        "> docker daemon опять чудит",
        "> uptime: кривой, но живой",
        "> mental state: в шипе",
      ],
      statements: [
        "я не сижу в одной роли.",
        "я закрываю грязные и дорогие задачи тоже.",
        "если это можно собрать, связать, задеплоить или починить - я в деле.",
        "стек широкий, потому что работа широкая.",
      ],
    },
    identity: {
      eyebrow: "идентичность / без ролевухи",
      title: ["не один", "не два", "не три", "направления."],
      body:
        "Я не играю в узкого спеца. Если проект требует фронт, бэк, данные, AI или инфру - просто беру и делаю.",
      lines: [
        "Я не клепаю просто сайты.",
        "Я строю рабочие системы.",
        "Иногда целиком продукт.",
        "Frontend.",
        "Backend.",
        "Data.",
        "ML / AI.",
        "Infra.",
        "Боты.",
        "Платежи.",
        "VPN / proxy / ops.",
        "Если задача странная - вообще отлично.",
      ],
      quote:
        '"иногда это уже не разработка. иногда это просто управление очень шумной машиной."',
    },
    chaos: {
      eyebrow: "хаос / большой диапазон",
      title: ["слишком много", "для одной", "специальности."],
      body:
        "Смысл не в прилизанности. Смысл в диапазоне: продукты, пайплайны, инфра, AI, деплой и вся связка, которая не даёт этому развалиться.",
      payload: "активные названия payload",
      unstable: "нестабильная видимость",
      feed: "фальшивый операторский поток",
      pressure: "гниение веток / давление сервисов",
      branches: ["origin/main", "feature/mesh-retry", "ops/panic-hotfix"],
      projects: [
        "more-stars",
        "unlimy",
        "relay",
        "analytics",
        "vpn mesh",
        "transformers",
        "workers",
        "tg infra",
        "orchestration",
        "monitoring",
        "proxy routing",
        "payment systems",
        "automation layers",
        "distributed pipelines",
        "scrapers",
        "experiments",
        "side-projects",
        "unfinished weapons",
      ],
      signals: [
        "commit 9c1fd2 - hotfix/retry-mesh",
        "deploy/main -> fra1-vps-03",
        "queue.redis backlog: 142",
        "worker.ai.infer status: throttled",
        "ssh root@hel1-core active",
        "telegram.event stream burst x48",
        "branch/unstable-operator merged",
        "proxy.mesh sync delta: 02",
        "postgres vacuum overdue",
        "ci/cd pipeline rerun with spite",
        "api /payments/reconcile 200",
        "scraper cluster woke up again",
        "tg-gift-worker lag detected",
        "payments-sync resumed after backpressure",
        "relay-beat heartbeat nominal",
        "anti-abuse model confidence dipped",
        "fallback-gateway warmed in iad-01",
        "orchestration-layer deferred cleanup",
      ],
    },
    silence: {
      label: "уровень шума упал / сигнал остался",
      lines: [
        "норм.",
        "очередь выжила. продукт выжил. я тоже.",
        "production всё помнит, так что шипи без стыда.",
        "некоторые системы не спят. люди, которые их держат, тоже.",
      ],
    },
    ego: {
      eyebrow: "эго / заслужено шипом",
      lines: [
        "большинство ребят шипят одну прослойку.",
        "я шиплю весь стек.",
        "это называют оверинжинирингом.",
        "пока не приходит крайний кейс.",
        "production - единственный серьёзный ревьюер.",
        "красивый код, который дохнет на инциденте, - декорация.",
        "скорость важна.",
        "ширина важна.",
        "результат важен.",
      ],
    },
    legend: {
      eyebrow: "легенда / операционная масса",
      title: ["не просто", "разраб. а", "тот самый."],
      body:
        "Миф начинает работать, когда поверхность огромная, но всё ещё связная. Сервисы, очереди, воркеры, продукты, клиенты, странные хотелки - всё должно жить.",
      serviceGraph: "фрагменты графа сервисов",
      allPaths: "все пути остаются живыми",
      dependency: "dependency mesh active",
      incidents: "память инцидентов",
      throughput: "атмосферная пропускная способность",
      atmosphere: [
        ["packet-noise", "присутствует"],
        ["crt-hum", "ощущается"],
        ["server-room", "дышит"],
        ["distant alarms", "приглушены"],
      ],
    },
    machine: {
      eyebrow: "машина / частная интернет-империя",
      title: ["production", "это единственный", "судья."],
      body:
        "Это не прилизанное портфолио. Это диспетчерская для работы, где фронт, бэк, data, infra и AI постоянно трогают друг друга.",
      clusterMap: "карта кластера",
      observability: "alerts наблюдаемости",
      stats: [
        { label: "github repos", value: "60+", tone: "text" },
        { label: "stack width", value: "wide", tone: "electric" },
        { label: "client trust", value: "for friends", tone: "toxic" },
        { label: "delivery mode", value: "full send", tone: "danger" },
      ],
      panels: [
        {
          title: "more-stars / commerce core",
          body:
            "Telegram commerce infra с маршрутизацией платежей, дисциплиной событий и без детского ора, когда что-то падает.",
          metrics: ["latency 18ms", "workers 07", "risk low"],
        },
        {
          title: "relay / proxy control plane",
          body:
            "Fallback-aware routing на случай, когда upstream-реальность начинает чудить.",
          metrics: ["mesh synced", "failover armed", "egress green"],
        },
        {
          title: "analytics / product telemetry",
          body:
            "Превращает движение пользователей, bot events и операторский шум в полезный product signal.",
          metrics: ["signals 144", "dashboards live", "events noisy"],
        },
        {
          title: "orchestration-layer / queue-recovery",
          body:
            "Не даёт воркерам, ретраям и fallback-очередям превратить инциденты в фольклор.",
          metrics: ["drain 91%", "retries paced", "incident debt low"],
        },
      ],
      alerts: [
        "wireguard edge synchronized",
        "nginx reload completed",
        "worker pool stabilized",
        "grafana ghost panel alive",
        "postgres locks acceptable",
        "ai pipeline drift detected",
        "queue-recovery entering watch state",
        "node-health mismatch in waw-edge",
      ],
    },
    cases: {
      eyebrow: "case vault / реальные проекты",
      title: ["сначала", "доказуха.", "потом ор."],
      body:
        "Стиль шумный специально. Но за шумом стоят рабочие проекты, которые реально живут и что-то делают.",
      items: [
        {
          name: "more-stars / telegram commerce",
          summary:
            "Сервис по продаже Telegram stars и подарков. Нормальная маршрутизация, адекватная надежность и продукт, который не разваливается.",
          stack: ["telegram bot", "payments", "commerce flow", "delivery"],
          result: "сделано так, чтобы деньги ходили и ничего не горело",
          links: [
            { label: "repo", href: "https://github.com/UtwoA/more-stars" },
            { label: "bot", href: "https://t.me/more_stars_bot" },
          ],
        },
        {
          name: "unlimy / vpn service",
          summary:
            "Мой VPN-сервис. Это уже не просто код, а инфра, маршрутизация, аптайм и работа с пользователями.",
          stack: ["vpn", "infra", "routing", "support"],
          result: "частная интернет-подводка с реальными ограничениями",
          links: [{ label: "bot", href: "https://t.me/unlimy_bot" }],
        },
        {
          name: "unlimy relay / mtproto configs",
          summary:
            "Автовыдача MTProto-конфигов через relay-слой. Меньше ручной возни, больше стабильной доставки.",
          stack: ["mtproto", "relay", "automation", "config delivery"],
          result: "чище способ раздавать конфиги без ручного шаманства",
          links: [{ label: "repo", href: "https://github.com/UtwoA/unlimy-relay" }],
        },
        {
          name: "asic hub / vpn ops",
          summary:
            "VPN-хаб для ASIC-операций, где важнее не красивый текст, а чтобы все было живым и управляемым.",
          stack: ["vpn", "ops", "hardware", "admin flow"],
          result: "держит странную hardware-часть в рабочем состоянии",
          links: [{ label: "repo", href: "https://github.com/UtwoA/ASIC_Hub_VPN" }],
        },
        {
          name: "unlimy flow / ai posts",
          summary:
            "ИИ-модель для постов. Полезно, когда нужно не просто генерить текст, а собирать полноценный workflow.",
          stack: ["ai", "content", "generation", "workflow"],
          result: "модельный пайплайн, который реально закрывает задачу",
          links: [{ label: "repo", href: "https://github.com/unlimy-org/unlimy-flow" }],
        },
      ],
    },
    telemetry: {
      seeds: [
        { label: "active services", value: 27, suffix: "", tone: "text" },
        { label: "healthy nodes", value: 18, suffix: "", tone: "electric" },
        { label: "degraded regions", value: 2, suffix: "", tone: "danger" },
        { label: "deploys this week", value: 43, suffix: "", tone: "toxic" },
        { label: "github repos", value: 60, suffix: "+", tone: "electric" },
        { label: "stack breadth", value: 6, suffix: "domains", tone: "toxic" },
      ],
    },
    shared: {
      services: [
        "tg-gift-worker",
        "payments-sync",
        "queue-recovery",
        "relay-beat",
        "anti-abuse",
        "node-health",
        "orchestration-layer",
        "ai-routing",
        "fallback-gateway",
        "proxy-mesh",
        "stars-fulfillment",
        "packet-telemetry",
      ],
      incidents: [
        "incident/4421: relay mesh entered degraded visibility",
        "incident/4421: fallback-gateway promoted in fra1",
        "incident/4422: stars-fulfillment queue saturation avoided",
        "incident/4423: anti-abuse false-positive cluster contained",
        "incident/4424: ai-routing drift acknowledged, not fatal",
      ],
      secretCommands: {
        "/help": {
          title: "доступные команды",
          body: "Используй /mental-state, /uptime, /sleep, /projects, /chaos, /deploy, /incident, /clear.",
          mode: "help",
        },
        "/ru": {
          title: "пасхалка",
          body: "Русская пасхалка: если знаешь, то знаешь.",
          mode: "projects",
        },
        "/mental-state": {
          title: "ментальное состояние",
          body: "production. слегка диссоциирован. всё ещё шипит.",
          mode: "danger",
        },
        "/sleep": {
          title: "отчёт по сну",
          body: "сон сейчас находится за feature flag.",
          mode: "toxic",
        },
        "/projects": {
          title: "активный payload",
          body: "more-stars, unlimy, relay, analytics, mesh, workers, experiments, и ещё пара странных новых проблем.",
          mode: "projects",
        },
        "/uptime": {
          title: "отчёт по uptime",
          body: "сервисы нестабильны. оператор на месте. машина всё ещё дышит.",
          mode: "observability",
        },
        "/chaos": {
          title: "режим хаоса",
          body: "плотность оверлея повышена. удачи это читать.",
          mode: "chaos",
        },
        "/deploy": {
          title: "память о деплое",
          body: "build. test. push. смотри на метрики. притворяйся спокойным. повторить.",
          mode: "deploy",
        },
        "/incident": {
          title: "архив инцидентов",
          body: "Инцидент закончился. Архитектура всё запомнила.",
          mode: "incident",
        },
        "/panic": {
          title: "паника подтверждена",
          body: "паника не является блокером. деплой всё равно.",
          mode: "danger",
        },
      },
    },
  },
};

export function detectPreferredLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved)) {
      return saved;
    }
  } catch {}

  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
  ].filter(Boolean);

  const matched = candidates.find((lang) =>
    lang.toLowerCase().startsWith("ru")
  );

  return matched ? "ru" : DEFAULT_LOCALE;
}
