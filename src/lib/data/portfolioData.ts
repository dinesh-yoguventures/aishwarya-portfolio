export interface CaseStudy {
	id: string;
	number: string;
	title: string;
	subtitle: string;
	period: string;
	tags: string[];
	summary: string;
	metrics: { label: string; value: string }[];
	spec: {
		systemOverview: string;
		stateManagement: string;
		lazyLoading: string;
		apiIntegration: string;
		testingSuite: string;
		architecturalFlow: string[];
		techHighlights: string[];
	};
}

export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	location: string;
	type: 'chronological' | 'impact';
	category?: 'Performance' | 'Scale' | 'Migration';
	impactMetrics: string[];
	description: string[];
	skills: string[];
}

export const PERSONAL_INFO = {
	name: 'Aishwarya S',
	fullName: 'Aishwarya Saravanan',
	monogram: 'AS',
	role: 'Senior Frontend Engineer',
	designation: 'Application Developer & Frontend SPOC',
	currentCompany: 'IBM India Pvt Ltd.',
	previousCompany: 'Sensiple Software Solutions',
	year: '2026',
	location: 'Bangalore, Karnataka - 560032',
	phone: '+91-9952382604',
	phoneDisplay: '+91 99523 82604',
	timezone: 'IST (UTC+5:30)',
	email: 'aishusara52@gmail.com',
	linkedin: 'https://www.linkedin.com/in/aishwarya-saravanan-sde/',
	headline: 'Hello.',
	subheadline:
		"I'm Aishwarya S, a Senior Frontend Engineer based in Bangalore with 7+ years of experience architecting enterprise portals, leading Angular modernizations, and delivering high-performance web systems across Energy, Banking & RegTech.",
	extendedBio:
		'Senior Frontend Engineer with 7+ years of experience building enterprise-scale web applications using Angular (8–17+) and RESTful architectures. Proven expertise in portal modernization, performance optimization (improving load times by 25–30%), and frontend architecture for regulated domains including healthcare, banking, and energy. Strong track record of leading migrations, frontend SPOC delivery, and collaborating with global cross-functional stakeholders in Agile environments.',
	stats: {
		experience: '7+',
		experienceLabel: 'Years Enterprise Experience',
		users: '50K+',
		usersLabel: 'Global Portal Users',
		optimization: '25–30%',
		optimizationLabel: 'Page Load Optimization'
	}
};

export const TECH_STACK = [
	{ name: 'Angular (8–17+)', category: 'Core Frontend', highlighted: true },
	{ name: 'TypeScript', category: 'Core Frontend', highlighted: true },
	{ name: 'JavaScript (ES6+)', category: 'Core Frontend', highlighted: true },
	{ name: 'RxJS & Signals', category: 'Reactive State', highlighted: true },
	{ name: 'RESTful APIs', category: 'Backend & Integration', highlighted: true },
	{ name: 'Liferay DXP Portals', category: 'Enterprise Portals', highlighted: true },
	{ name: 'Jasmine & Karma', category: 'Testing & QA', highlighted: true },
	{ name: 'Bootstrap & Material UI', category: 'UI Systems', highlighted: true },
	{ name: 'Microservices & SOA', category: 'Architecture', highlighted: true },
	{ name: 'Performance Tuning (25-30%)', category: 'Optimization', highlighted: true },
	{ name: 'Node.js & JAX-RS', category: 'Backend & Integration', highlighted: false },
	{ name: 'HTML5 & CSS3', category: 'Core Frontend', highlighted: false },
	{ name: 'Gulp & Build Tools', category: 'Tooling', highlighted: false },
	{ name: 'Tomcat & WebLogic', category: 'Deployment', highlighted: false },
	{ name: 'Git & Agile (Scrum)', category: 'Methodology', highlighted: false }
];

export const CASE_STUDIES: CaseStudy[] = [
	{
		id: 'nextbi-bess',
		number: '01',
		title: 'NextBI DTE — FPL, USA',
		subtitle: 'Industrial BESS & Grid Performance Analytics Console',
		period: 'Mar 2021 — PRESENT',
		tags: ['✦ Angular 17', '✦ BESS Energy Storage', '✦ Real-Time Analytics', '✦ FPL, USA'],
		summary:
			'Architected enterprise Angular-based dashboards for Battery Energy Storage Systems (BESS) for Florida Power & Light (FPL), USA. Enabled real-time visualization of solar and grid performance metrics, resolved data quality bottlenecks, and implemented site-level tag mappings across 50,000+ global portal users with a 25–30% boost in page load speed.',
		metrics: [
			{ label: 'Global Portal Users', value: '50K+' },
			{ label: 'Page Load Gain', value: '25–30%' },
			{ label: 'Telemetry Latency', value: '< 100ms' }
		],
		spec: {
			systemOverview:
				'NextBI DTE is an industrial-scale monitoring and analytics portal developed for utility-grade Battery Energy Storage Systems (BESS) at Florida Power & Light (FPL). The platform ingests high-frequency telemetry streams (battery cell temperatures, state of charge, inverter health, and grid frequency harmonics) across geographically distributed storage facilities, delivering actionable real-time visualization for power operators and engineers.',
			stateManagement:
				'Engineered reactive state architecture utilizing Angular 17 Signals coupled with RxJS multicasting operators to stream real-time sensor metrics without frame drops. Employed ChangeDetectionStrategy.OnPush across all telemetry canvas widgets, eliminating unnecessary dirty checks and CPU bottlenecks during 60fps data stream cycles.',
			lazyLoading:
				'Designed standalone component architecture with deferred loading (@defer) and route-level code splitting. In-depth inverter diagnostics, tag mapping modules, and historical energy analytics load on-demand, reducing initial application bundle footprint by over 40%.',
			apiIntegration:
				'Engineered resilient RESTful integration with backend microservices and streaming endpoints, featuring exponential backoff, circuit-breaker retry policies, and site-level tag normalization to handle fluctuating IoT network conditions reliably.',
			testingSuite:
				'Implemented automated unit and integration tests using Jasmine & Karma with customized marble testing for RxJS stream pipelines, achieving 88%+ code coverage and zero-regression production deployments.',
			architecturalFlow: [
				'BESS Facility Sensor Tag Ingestion Gateway',
				'Secure RESTful API & Telemetry Pipeline',
				'RxJS Telemetry Buffer & Data Normalization',
				'Angular 17 Standalone Views with OnPush Detection'
			],
			techHighlights: ['Angular 17 Standalone', 'RxJS Stream Processing', 'Site-Level Tag Mapping', 'Real-Time Energy Graphs']
		}
	},
	{
		id: 'aml-surveillance',
		number: '02',
		title: 'Anti-Money Laundering (AML) Platform',
		subtitle: 'Configurable Rule-Based Banking Surveillance & FATF Compliance',
		period: 'Nov 2019 — Dec 2020',
		tags: ['✦ Angular 10', '✦ RegTech & Banking', '✦ FATF Compliance', '✦ Sensiple'],
		summary:
			'Built configurable rule-based surveillance and alerting systems for banking compliance at Sensiple Software Solutions. Led planning, estimation, development, testing, and delivery cycles to support FATF compliance through advanced dashboards and reporting modules serving 10,000+ internal and external compliance users.',
		metrics: [
			{ label: 'Compliance Users', value: '10K+' },
			{ label: 'Audit Accuracy', value: '99.4%' },
			{ label: 'Regulatory Adherence', value: 'FATF & Basel' }
		],
		spec: {
			systemOverview:
				'The Anti-Money Laundering (AML) Platform is a mission-critical financial surveillance portal designed for tier-1 banking institutions. It continuously evaluates transaction streams against configurable regulatory compliance rules, detecting suspicious structuring, cross-border anomalies, and politically exposed persons (PEP) to satisfy rigorous Financial Action Task Force (FATF) standards.',
			stateManagement:
				'Built an immutable, reactive state management pipeline using RxJS Subject patterns and scoped services to synchronize rule configuration sets, alert triage queues, and multi-filter investigation drill-downs without state discrepancies.',
			lazyLoading:
				'Partitioned the platform into modular Angular feature packages using route-level lazy loading. Heavy regulatory reporting engines, transaction replay timelines, and audit logs are dynamically loaded only when compliance officers trigger specific cases.',
			apiIntegration:
				'Architected an enterprise HTTP Interceptor pipeline providing automated JWT token rotation, cryptographic payload signing, request correlation tracing, and standardized error interception across microservices.',
			testingSuite:
				'Constructed comprehensive Jasmine and Karma test suites covering boundary validation, edge-case financial rule triggers, and automated mock API responses, maintaining 85%+ branch coverage.',
			architecturalFlow: [
				'Core Banking Transaction Feed',
				'Configurable Rule Engine & Alert Dispatcher',
				'Secured Angular Interceptor Gateway',
				'FATF Case Management & Reporting Portal'
			],
			techHighlights: ['FATF Compliance Engine', 'HTTP Interceptor Pipeline', 'Configurable Rule Builder', 'Audit Trail Architecture']
		}
	},
	{
		id: 'basel-compliance',
		number: '03',
		title: 'Basel II / III Compliance Platform',
		subtitle: 'Enterprise RegTech Solutions & Risk-Weighted Asset Dashboards',
		period: 'Nov 2019 — Dec 2020',
		tags: ['✦ Angular 8', '✦ Basel II/III RegTech', '✦ Risk Dashboards', '✦ Sensiple'],
		summary:
			'Delivered enterprise RegTech solutions for Basel II/III regulatory compliance at Sensiple Software Solutions. Implemented business rule engines and interactive risk-weighted asset (RWA) dashboards while coordinating cross-functional teams to ensure adherence to strict banking deadlines and zero-defect deployments.',
		metrics: [
			{ label: 'Delivery Timelines', value: '100% On-Time' },
			{ label: 'Domain Standards', value: 'Basel II & III' },
			{ label: 'Quality Score', value: 'Zero Regressions' }
		],
		spec: {
			systemOverview:
				'The Basel II/III Compliance Platform provides enterprise financial institutions with real-time risk reporting, capital adequacy calculations, and credit risk analytics. The system enables risk analysts and regulatory auditors to visualize capital tier ratios and stress-test risk-weighted assets against international banking standards.',
			stateManagement:
				'Engineered deterministic state models to support complex multi-dimensional risk matrix evaluations, ensuring rapid calculation updates without freezing user interaction during large portfolio re-evaluations.',
			lazyLoading:
				'Structured modular architecture segregating Credit Risk, Operational Risk, and Market Risk calculators into discrete, lazily-loaded Angular modules to optimize memory usage and initial load times.',
			apiIntegration:
				'Developed secure RESTful API integrations with backend Java/JAX-RS enterprise services, enabling secure transmission of encrypted financial datasets and fast client-side rendering of large risk tables.',
			testingSuite:
				'Enforced strict test-driven development methodologies utilizing Karma and Jasmine to validate mathematical calculation integrity, dynamic rule evaluation, and regulatory export formats.',
			architecturalFlow: [
				'Institutional Risk & Ledger Data Feeds',
				'Business Rule Engine & Capital Adequacy Calculator',
				'Secure Enterprise JAX-RS / REST Integration Layer',
				'Interactive Basel II/III Risk Analytics Dashboard'
			],
			techHighlights: ['Risk-Weighted Asset (RWA)', 'Business Rule Engines', 'JAX-RS Integration', 'Strict RegTech Auditing']
		}
	}
];

export const TIMELINE_CHRONO: ExperienceItem[] = [
	{
		role: 'Application Developer (Senior Frontend Engineer)',
		company: 'IBM India Pvt Ltd.',
		period: 'Feb 2021 — PRESENT',
		location: 'Bangalore, Karnataka',
		type: 'chronological',
		impactMetrics: ['50,000+ Global Users', '25–30% Load Time Gain', 'Angular (10 — 17+)', 'Frontend SPOC'],
		description: [
			'Developed and maintained enterprise-grade frontend applications using Angular (10 – 17+), supporting 50,000+ users across global portals.',
			'Led UI framework upgrades and performance optimization initiatives, improving page load times by 25–30% through OnPush change detection, tree-shaking, and lazy loading.',
			'Developed and customized enterprise portal applications using Liferay DXP, including portlets, themes, layouts, and reusable UI components aligned with organizational requirements.',
			'Designed and integrated RESTful APIs with backend services, reducing data latency and improving UI reliability across critical operational workflows.',
			'Acted as frontend SPOC for feature planning, code reviews, technical estimations, and release coordination in Agile/Scrum environments.',
			'Engineered reusable component libraries and ensured cross-browser compatibility across Chrome, Safari, Firefox, and enterprise enterprise environments while proactively mitigating technical risks.'
		],
		skills: ['Angular 17', 'TypeScript', 'Liferay DXP', 'RESTful APIs', 'RxJS', 'Jasmine / Karma', 'Performance Optimization', 'Agile/Scrum']
	},
	{
		role: 'System Analyst (Frontend Engineer)',
		company: 'Sensiple Software Solutions Pvt Ltd.',
		period: 'May 2018 — Dec 2020',
		location: 'Chennai, Tamil Nadu',
		type: 'chronological',
		impactMetrics: ['10,000+ Compliance Users', 'FATF & Basel II/III', 'Angular (8–10)', 'Junior Dev Mentorship'],
		description: [
			'Led end-to-end frontend delivery of enterprise Angular (8–10) applications, covering requirement analysis, wireframing, UI development, testing, and production support.',
			'Owned multiple complex modules and served as technical point of contact for frontend architecture and implementation decisions.',
			'Delivered regulatory and compliance-focused applications within strict timelines for banking and financial services clients (Anti-Money Laundering & Basel II/III platforms).',
			'Collaborated with business stakeholders, backend teams, and QA to translate functional requirements into scalable, robust UI solutions.',
			'Mentored junior developers and provided technical guidance to ensure adherence to coding standards, design best practices, and performance benchmarks for platforms used by 10K+ users.'
		],
		skills: ['Angular (8–10)', 'JavaScript (ES6+)', 'TypeScript', 'RESTful APIs', 'Jasmine / Karma', 'Bootstrap', 'RegTech & FinTech']
	},
	{
		role: 'Bachelor of Technology (B.Tech) — Information Technology',
		company: 'Anna University',
		period: '2014 — 2018',
		location: 'Chennai, Tamil Nadu',
		type: 'chronological',
		impactMetrics: ['B.Tech IT Graduate', 'Software Engineering Core', 'Web Architecture Foundations'],
		description: [
			'Acquired comprehensive foundation in computer science and information technology, including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Application Architectures.'
		],
		skills: ['Computer Science', 'Information Technology', 'Algorithms', 'Web Systems', 'Software Engineering']
	}
];

export const TIMELINE_IMPACT: ExperienceItem[] = [
	{
		role: 'Frontend Performance & Load Optimization',
		company: 'IBM India Pvt Ltd.',
		period: '2021 — Present',
		location: 'Bangalore, India',
		type: 'impact',
		category: 'Performance',
		impactMetrics: ['25–30% Load Time Cut', '40%+ Bundle Reduction', 'Sub-second FCP'],
		description: [
			'Spearheaded enterprise portal performance optimization initiatives, slashing average page load times by 25–30% across global applications.',
			'Implemented Angular 17 standalone components, route-level deferred loading (@defer), and OnPush change detection strategies to isolate continuous sensor graph renders.',
			'Reduced data latency and enhanced UI reliability through optimized RESTful API integration, client-side caching, and request deduplication.'
		],
		skills: ['Performance Tuning', 'OnPush Strategy', 'Angular 17 Standalone', 'Bundle Optimization', 'Core Web Vitals']
	},
	{
		role: 'Regulated Enterprise Systems at Global Scale',
		company: 'IBM & Sensiple (FPL, USA & Banking Clients)',
		period: '2018 — Present',
		location: 'Bangalore / Chennai',
		type: 'impact',
		category: 'Scale',
		impactMetrics: ['50,000+ Portal Users', '10,000+ Compliance Users', '<100ms BESS Telemetry'],
		description: [
			'Architected NextBI DTE BESS analytics portal for Florida Power & Light (FPL, USA), delivering real-time solar and grid performance visualization with sub-second responsiveness.',
			'Engineered configurable Anti-Money Laundering (AML) surveillance interfaces and Basel II/III capital risk dashboards for banking compliance.',
			'Ensured uninterrupted compliance with international regulatory bodies including FATF and Basel Committee banking frameworks.'
		],
		skills: ['BESS Analytics', 'FATF / Basel RegTech', 'Enterprise Portals', 'Cross-Platform Reliability']
	},
	{
		role: 'Angular Migrations & Frontend SPOC Leadership',
		company: 'IBM India Pvt Ltd. & Sensiple',
		period: '2018 — Present',
		location: 'Bangalore / Chennai',
		type: 'impact',
		category: 'Migration',
		impactMetrics: ['Angular 8 → 10 → 17+', 'Liferay DXP Integration', 'Frontend SPOC & Mentor'],
		description: [
			'Successfully navigated continuous enterprise UI framework modernization across major Angular releases from legacy version 8 through modern Angular 17+.',
			'Developed and customized enterprise portal applications using Liferay DXP, building reusable portlets, themes, layouts, and components.',
			'Served as Frontend Single Point of Contact (SPOC) for feature planning, code reviews, technical estimations, risk mitigation, and junior developer mentoring.'
		],
		skills: ['Angular Migration (8–17+)', 'Liferay DXP', 'Frontend SPOC', 'Code Reviews & Standards', 'Mentorship']
	}
];
