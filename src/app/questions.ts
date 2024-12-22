export const QUESTIONS = [
  {
    question: 'Un cliente está implementando una nueva aplicación y debe elegir una región de AWS. ¿Cuál de los siguientes factores podría influir en la decisión del cliente?',
    options: ['Latencia reducida a los usuarios', 'La presentación de la aplicación en el idioma local', 'Cumplimiento de la soberanía de datos', 'Costos de enfriamiento en climas más cálidos', 'Proximidad a la oficina del cliente para visitas on-site'],
    correctAnswer: ['Latencia reducida a los usuarios', 'Cumplimiento de la soberanía de datos'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: '¿Qué servicio de almacenamiento se puede utilizar como una opción de bajo costo para alojar sitios web estáticos?',
    options: ['Amazon Glacier', 'Amazon DynamoDB', 'Amazon Elastic File System (Amazon EFS)', 'Amazon Simple Storage Service (Amazon S3)'],
    correctAnswer: ['Amazon Simple Storage Service (Amazon S3)'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué modelo de precios de instancias de Amazon EC2 puede ofrecer descuentos de hasta el 90 %?',
    options: ['Reserved Instances', 'On-Demand', 'Dedicated Hosts', 'Spot Instances'],
    correctAnswer: ['Spot Instances'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál de los siguientes servicios en la nube de AWS se puede utilizar para ejecutar una base de datos relacional administrada por el cliente?',
    options: ['Amazon EC2', 'Amazon Route 53', 'Amazon ElastiCache', 'Amazon DynamoDB'],
    correctAnswer: ['Amazon EC2'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa está buscando una solución de data warehouse escalable. ¿Cuál de las siguientes soluciones de AWS satisfaría las necesidades de la empresa?',
    options: ['Amazon Simple Storage Service (Amazon S3)', 'Amazon DynamoDB', 'Amazon Kinesis', 'Amazon Redshift'],
    correctAnswer: ['Amazon Redshift'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué afirmación describe mejor a Elastic Load Balancing?',
    options: ['Traduce un nombre de dominio en una dirección IP usando DNS.', 'Distribuye el tráfico de aplicaciones entrantes a través de una o más instancias de Amazon EC2.', 'Recopila métricas en instancias Amazon EC2 conectadas.', 'Ajusta automáticamente la cantidad de instancias de Amazon EC2 para admitir el tráfico entrante.'],
    correctAnswer: ['Distribuye el tráfico de aplicaciones entrantes a través de una o más instancias de Amazon EC2.'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuáles de las siguientes son formas válidas para que un cliente interactúe con los servicios de AWS?',
    options: ['Command line interface', 'On-premises', 'Software Development Kits', 'Software-as-a-service', 'Hybrid'],
    correctAnswer: ['Command line interface', 'Software Development Kits'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Las múltiples regiones de la nube de AWS son un ejemplo de:',
    options: ['Agilidad', 'Global infrastructure', 'Elasticidad', 'Precios de pago por uso'],
    correctAnswer: ['Global infrastructure'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál de los siguientes servicios de AWS se puede utilizar para entregar grandes cantidades de contenido de video en línea con la latencia más baja posible?',
    options: ['AWS Storage Gateway', 'Amazon S3', 'Amazon Elastic File System (EFS)', 'Amazon Glacier', 'Amazon CloudFront'],
    correctAnswer: ['Amazon S3', 'Amazon CloudFront'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Los servidores web que se ejecutan en Amazon EC2 acceden a una aplicación heredada que se ejecuta en un centro de datos corporativo. ¿Qué término describiría este modelo?',
    options: ['Cloud-native', 'Partner network', 'Hybrid architecture', 'Infrastructure as a service'],
    correctAnswer: ['Hybrid architecture'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicios de AWS se pueden utilizar como herramientas de automatización de infraestructura?',
    options: ['AWS CloudFormation', 'Amazon CloudFront', 'AWS Batch', 'AWS OpsWorks', 'Amazon QuickSight'],
    correctAnswer: ['AWS CloudFormation', 'AWS OpsWorks'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Una empresa que hace negocios en línea necesita ofrecer rápidamente nuevas funciones de manera iterativa, minimizando el tiempo de comercialización. ¿Qué característica de la nube de AWS puede proporcionar esto?',
    options: ['Elasticidad', 'Alta disponibilidad', 'Agilidad', 'Fiabilidad'],
    correctAnswer: ['Agilidad'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué características o servicios se pueden usar para monitorear los costos y gastos de una cuenta de AWS?',
    options: ['AWS Cost and Usage report', 'AWS product pages', 'AWS Simple Monthly Calculator', 'Billing alerts and Amazon CloudWatch alarms', 'AWS Price List API'],
    correctAnswer: ['AWS Cost and Usage report', 'Billing alerts and Amazon CloudWatch alarms'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Amazon Route 53 permite a los usuarios:',
    options: ['Cifrar datos en tránsito', 'Registrar nombres de dominio DNS', 'Generar y administrar certificados SSL', 'Establecer una conexión de red dedicada a AWS'],
    correctAnswer: ['Registrar nombres de dominio DNS'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio de AWS ayuda a identificar actividades malintencionadas o no autorizadas en cuentas y cargas de trabajo de AWS?',
    options: ['Amazon Rekognition', 'AWS Trusted Advisor', 'Amazon GuardDuty', 'Amazon CloudWatch'],
    correctAnswer: ['Amazon GuardDuty'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa quiere probar una solución de comercio electrónico de terceros antes de decidir usarla a largo plazo. ¿Qué servicio o herramienta de AWS apoyará este esfuerzo?',
    options: ['AWS Marketplace', 'AWS Partner Network (APN)', 'AWS Managed Services', 'AWS Service Catalog'],
    correctAnswer: ['AWS Marketplace'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio o característica de AWS permite a un usuario escalar fácilmente la conectividad entre miles de VPC?',
    options: ['VPC peering', 'AWS Transit Gateway', 'AWS Direct Connect', 'AWS Global Accelerator'],
    correctAnswer: ['AWS Transit Gateway'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa necesita protección contra ataques de denegación de servicio distribuido (DDoS) ampliados en su sitio web y la asistencia de expertos de AWS durante tales eventos. ¿Qué servicio administrado de AWS cumplirá estos requisitos?',
    options: ['AWS Shield Advanced', 'AWS Firewall Manager', 'AWS WAF', 'Amazon GuardDuty'],
    correctAnswer: ['AWS Shield Advanced'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'La aplicación de una empresa tiene horas de inicio y finalización flexibles. ¿Qué modelo de precios de Amazon EC2 será el MÁS rentable?',
    options: ['On-Demand Instances', 'Spot Instances', 'Reserved Instances', 'Dedicated Hosts'],
    correctAnswer: ['Spot Instances'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Según el modelo de responsabilidad compartida de AWS, ¿cuáles son las responsabilidades del cliente?',
    options: ['Seguridad física y ambiental', 'Dispositivos de red física, incluidos cortafuegos', 'Desmantelamiento de dispositivos de almacenamiento', 'Seguridad de los datos en tránsito', 'Autenticación de integridad de datos'],
    correctAnswer: ['Seguridad de los datos en tránsito', 'Autenticación de integridad de datos'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Un profesional de la nube tiene una carga de trabajo de análisis de datos que se ejecuta con poca frecuencia y puede interrumpirse sin daño. Para optimizar el costo, ¿qué opción de compra de Amazon EC2 se debe usar?',
    options: ['On-Demand Instances', 'Reserved Instances', 'Spot Instances', 'Dedicated Hosts'],
    correctAnswer: ['Spot Instances'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio de contenedor de AWS ayudará a un usuario a instalar, operar y escalar la infraestructura de administración de clústeres?',
    options: ['Amazon Elastic Container Registry (Amazon ECR)', 'AWS Elastic Beanstalk', 'Amazon Elastic Container Service (Amazon ECS)', 'Amazon Elastic Block Store (Amazon EBS)'],
    correctAnswer: ['Amazon Elastic Container Service (Amazon ECS)'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué hace la calculadora mensual simple de AWS?',
    options: ['Compara los costos locales con los entornos de colocación', 'Estima la facturación mensual según el uso proyectado', 'Estima el consumo de energía en los centros de datos existentes', 'Estima la utilización de la CPU'],
    correctAnswer: ['Estima la facturación mensual según el uso proyectado'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Quién es responsable de parchear el sistema operativo invitado para Amazon RDS?',
    options: ['The AWS Product team', 'The customer Database Administrator', 'Managed partners', 'AWS Support'],
    correctAnswer: ['The customer Database Administrator'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicios de AWS se pueden escalar con AWS Auto Scaling?',
    options: ['Amazon EC2', 'Amazon DynamoDB', 'Amazon S3', 'Amazon Route 53', 'Amazon Redshift'],
    correctAnswer: ['Amazon EC2', 'Amazon DynamoDB'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  }, 
  {
    question: '¿Cuáles de los siguientes son beneficios de AWS Global Accelerator? (Escoge dos.)',
    options: [
      'Costo reducido para ejecutar servicios en AWS',
      'Disponibilidad mejorada de las aplicaciones implementadas en AWS',
      'Mayor durabilidad de los datos almacenados en AWS',
      'Reducción de la latencia para llegar a las aplicaciones implementadas en AWS',
      'Mayor seguridad de los datos almacenados en AWS'
    ],
    correctAnswer: ['Disponibilidad mejorada de las aplicaciones implementadas en AWS', 'Reducción de la latencia para llegar a las aplicaciones implementadas en AWS'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Un usuario que desee obtener ayuda con la facturación y reactivar una cuenta suspendida debe enviar una solicitud de cuenta y facturación a:',
    options: [
      'the AWS Support forum',
      'an AWS Solutions Architect',
      'AWS Support'
    ],
    correctAnswer: ['AWS Support'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué práctica recomendada de la nube de AWS utiliza la elasticidad y la agilidad de la computación en la nube?',
    options: [
      'Provisión de capacidad basada en el uso anterior y los picos teóricos',
      'Escale de forma dinámica y predictiva para satisfacer las demandas de uso',
      'Cree la aplicación y la infraestructura en un centro de datos que otorga acceso físico',
      'Dividir la aplicación en componentes débilmente acoplados'
    ],
    correctAnswer: ['Escale de forma dinámica y predictiva para satisfacer las demandas de uso'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué método ayuda a optimizar los costos de los usuarios que se trasladan a la nube de AWS?',
    options: [
      'Pagando solo por lo que se usa',
      'Comprar hardware antes de que sea necesario',
      'Aprovisionamiento manual de recursos en la nube',
      'Compra para la máxima carga posible'
    ],
    correctAnswer: ['Pagando solo por lo que se usa'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Según el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes es una responsabilidad del cliente?',
    options: [
      'Instalación de parches de seguridad para los hipervisores Xen y KVM',
      'Instalación de parches del sistema operativo para Amazon DynamoDB',
      'Instalación de parches de seguridad del sistema operativo para instancias de bases de datos de Amazon EC2',
      'Instalación de parches de seguridad del sistema operativo para instancias de bases de datos de Amazon RDS'
    ],
    correctAnswer: ['Instalación de parches de seguridad del sistema operativo para instancias de bases de datos de Amazon EC2'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Las herramientas de administración de costos de AWS brindan a los usuarios la capacidad de hacer ¿cuál de las siguientes? (Escoge dos.)',
    options: [
      'Cancele todos los recursos de AWS automáticamente si se superan los umbrales de presupuesto.',
      'Desglose los costos de AWS por día, servicio y cuenta de AWS vinculada.',
      'Cree presupuestos y reciba notificaciones si el uso actual previsto supera los presupuestos.',
      'Cambie automáticamente a Instancias reservadas o Instancias Spot, lo que sea más rentable.',
      'Mueva los datos almacenados en Amazon S3 a una clase de almacenamiento más rentable.'
    ],
    correctAnswer: ['Desglose los costos de AWS por día, servicio y cuenta de AWS vinculada.', 'Cree presupuestos y reciba notificaciones si el uso actual previsto supera los presupuestos.'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Bajo el modelo de responsabilidad compartida de AWS, la seguridad y parcheo del sistema operativo huésped es responsabilidad de:',
    options: [
      'AWS Support',
      'the customer',
      'AWS Systems Manager',
      'AWS Config'
    ],
    correctAnswer: ['the customer'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio de AWS facilita la creación y administración de usuarios y grupos de AWS y les brinda acceso seguro a los recursos de AWS sin cargo?',
    options: [
      'AWS Direct Connect',
      'Amazon Connect',
      'AWS Identity and Access Management (IAM)',
      'AWS Firewall Manager'
    ],
    correctAnswer: ['AWS Identity and Access Management (IAM)'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio de AWS proporciona documentación de cumplimiento y seguridad de AWS a pedido?',
    options: [
      'AWS Directory Service',
      'AWS Artifact',
      'AWS Trusted Advisor',
      'AWS Trusted Advisor'
    ],
    correctAnswer: ['AWS Artifact'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa ha distribuido su carga de trabajo tanto en la nube de AWS como en algunos servidores locales. ¿Qué tipo de arquitectura es esta?',
    options: [
      'Virtual private network',
      'Virtual private cloud',
      'Hybrid cloud',
      'Private cloud'
    ],
    correctAnswer: ['Hybrid cloud'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál es uno de los principios básicos a seguir al diseñar una aplicación de alta disponibilidad en la nube de AWS?',
    options: ['Diseño utilizando una arquitectura sin servidor', 'Suponga que todos los componentes dentro de una aplicación pueden fallar', 'Diseñe AWS Auto Scaling en cada aplicación', 'Diseñe todos los componentes usando código abierto'],
    correctAnswer: ['Suponga que todos los componentes dentro de una aplicación pueden fallar'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Un usuario debe generar un informe que describa el estado de las comprobaciones de seguridad clave en una cuenta de AWS. El informe debe incluir: El estado de los permisos del depósito de Amazon S3. Si la autenticación multifactor está habilitada para el usuario raíz de la cuenta de AWS. Si corresponde los grupos de seguridad están configurados para permitir el acceso sin restricciones ¿Dónde se puede encontrar toda esta información en un solo lugar?',
    options: ['Amazon QuickSight dashboard', 'AWS CloudTrail trails', 'AWS Trusted Advisor report', 'IAM credential report'],
    correctAnswer: ['AWS Trusted Advisor report'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué modelo de precios de Amazon EC2 debe usarse para cumplir con los requisitos de licencia de software por núcleo?',
    options: ['Dedicated Hosts', 'On-Demand Instances', 'Spot Instances', 'Reserved Instances'],
    correctAnswer: ['Dedicated Hosts'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál de la infraestructura global de AWS se utiliza para almacenar en caché copias de contenido para una entrega más rápida a los usuarios de todo el mundo?',
    options: ['AWS Regions', 'Availability Zones', 'Edge locations', 'Data centers'],
    correctAnswer: ['Edge locations'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'El uso de AWS Config para registrar, auditar y evaluar los cambios en los recursos de AWS para permitir la trazabilidad es un ejemplo de qué pilar del marco de buena arquitectura de AWS.',
    options: ['Security', 'Operational excellence', 'Performance efficiency', 'Cost optimization'],
    correctAnswer: ['Operational excellence'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Un usuario necesita implementar rápidamente una base de datos no relacional en AWS. El usuario no desea administrar el hardware subyacente ni el software de la base de datos. ¿Qué servicio de AWS se puede utilizar para lograr esto?',
    options: ['Amazon RDS', 'Amazon DynamoDB', 'Amazon Aurora', 'Amazon Redshift'],
    correctAnswer: ['Amazon DynamoDB'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Un Cloud Practitioner está desarrollando un plan de recuperación ante desastres y tiene la intención de replicar datos entre varias áreas geográficas. ¿Cuál de los siguientes cumple con estos requisitos?',
    options: ['AWS Accounts', 'AWS Regions', 'Availability Zones', 'Edge locations'],
    correctAnswer: ['AWS Regions'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué características y beneficios ofrece el servicio de AWS Organizations? (Escoge dos.)',
    options: ['Establecer comunicaciones en tiempo real entre los miembros de un equipo interno', 'Facilitar el uso de bases de datos NoSQL', 'Proporcionar controles de seguridad automatizados', 'Implementación de la facturación consolidada', 'Hacer cumplir la gobernanza de las cuentas de AWS'],
    correctAnswer: ['Implementación de la facturación consolidada', 'Hacer cumplir la gobernanza de las cuentas de AWS'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: '¿Qué servicio de AWS se utiliza para automatizar la administración de la configuración mediante Chef y Puppet?',
    options: ['AWS Config', 'AWS OpsWorks', 'AWS CloudFormation', 'AWS Systems Manager'],
    correctAnswer: ['AWS OpsWorks'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué herramienta es la más adecuada para combinar la facturación de cuentas de AWS que antes eran independientes entre sí?',
    options: ['Detailed billing report', 'Consolidated billing', 'AWS Cost and Usage report', 'Cost allocation report'],
    correctAnswer: ['Consolidated billing'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'La calculadora del costo total de propiedad (TCO) de AWS se utiliza para:',
    options: ['Recibir informes que desglosan los costos de cómputo de la nube de AWS por duración, recurso o etiquetas.', 'Estimar los ahorros al comparar la nube de AWS con un entorno local', 'Estimar una factura mensual por los recursos de la nube de AWS que se utilizarán', 'Habilitar alertas de facturación para monitorear los costos reales de AWS en comparación con los costos estimados'],
    correctAnswer: ['Estimar los ahorros al comparar la nube de AWS con un entorno local'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio o característica de AWS permite a un usuario escalar fácilmente la conectividad entre miles de VPC?',
    options: ['VPC peering', 'AWS Transit Gateway', 'AWS Direct Connect', 'AWS Global Accelerator'],
    correctAnswer: ['AWS Transit Gateway'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa necesita protección contra ataques de denegación de servicio distribuido (DDoS) ampliados en su sitio web y la asistencia de expertos de AWS durante tales eventos. ¿Qué servicio administrado de AWS cumplirá estos requisitos?',
    options: ['AWS Shield Advanced', 'AWS Firewall Manager', 'AWS WAF', 'Amazon GuardDuty'],
    correctAnswer: ['AWS Shield Advanced'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'La aplicación de una empresa tiene horas de inicio y finalización flexibles. ¿Qué modelo de precios de Amazon EC2 será el MÁS rentable?',
    options: ['On-Demand Instances', 'Spot Instances', 'Reserved Instances', 'Dedicated Hosts'],
    correctAnswer: ['Spot Instances'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Según el modelo de responsabilidad compartida de AWS, ¿cuáles son las responsabilidades del cliente? (Escoge dos.)',
    options: ['Seguridad física y ambiental', 'Dispositivos de red física, incluidos cortafuegos', 'Desmantelamiento de dispositivos de almacenamiento', 'Seguridad de los datos en tránsito', 'Autenticación de integridad de datos'],
    correctAnswer: ['Seguridad de los datos en tránsito', 'Autenticación de integridad de datos'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Un usuario debe cumplir con los requisitos de licencia de software y cumplimiento que establecen que una carga de trabajo debe alojarse en un servidor físico. ¿Qué opción de precios de instancias de Amazon EC2 cumplirá con estos requisitos?',
    options: ['Dedicated Hosts', 'Dedicated Instances', 'Spot Instances', 'Reserved Instances'],
    correctAnswer: ['Dedicated Hosts'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué servicio de AWS proporcionará una forma de generar claves de cifrado que se pueden usar para cifrar datos? (Elija dos opciones).',
    options: ['Amazon Macie', 'AWS Certificate Manager', 'AWS Key Management Service (AWS KMS)', 'AWS Secrets Manager', 'AWS CloudHSM'],
    correctAnswer: ['AWS Key Management Service (AWS KMS)', 'AWS CloudHSM'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Una empresa planea migrar desde las instalaciones a la nube de AWS. ¿Qué herramienta o servicio de AWS proporciona informes detallados sobre los ahorros de costos estimados después de la migración?',
    options: ['AWS Total Cost of Ownership (TCO) Calculator', 'Cost Explorer', 'AWS Budgets', 'AWS Migration Hub'],
    correctAnswer: ['AWS Total Cost of Ownership (TCO) Calculator'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué puede ayudar en la evaluación de una aplicación para la migración a la nube? (Elija dos opciones).',
    options: ['AWS Trusted Advisor', 'AWS Professional Services', 'AWS Systems Manager', 'AWS Partner Network (APN)', 'AWS Secrets Manager'],
    correctAnswer: ['AWS Trusted Advisor', 'AWS Professional Services'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: '¿Qué servicio de AWS ayuda a los usuarios a cumplir con los requisitos de cumplimiento normativo y contractual para la seguridad de los datos mediante el uso de dispositivos de hardware dedicados dentro de la nube de AWS?',
    options: ['AWS Secrets Manager', 'AWS CloudHSM', 'AWS Key Management Service (AWS KMS)', 'AWS Directory Service'],
    correctAnswer: ['AWS CloudHSM'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Bajo el modelo de responsabilidad compartida de AWS, ¿el cliente administra cuál de los siguientes? (Elija dos opciones).',
    options: ['Desmantelamiento de dispositivos de almacenamiento físico', 'Configuración de grupo de seguridad y ACL', 'Administración de parches de un sistema operativo de instancia de Amazon RDS', 'Control de acceso físico a centros de datos', 'Gestión de parches de un sistema operativo de instancia Amazon EC2'],
    correctAnswer: ['Configuración de grupo de seguridad y ACL', 'Gestión de parches de un sistema operativo de instancia Amazon EC2'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: '¿Qué servicio de AWS es adecuado para una carga de trabajo basada en eventos?',
    options: ['Amazon EC2', 'AWS Elastic Beanstalk', 'AWS Lambda', 'Amazon Lumberyard'],
    correctAnswer: ['AWS Lambda'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál es una propuesta de valor de la nube de AWS?',
    options: ['AWS es responsable de la seguridad en la nube de AWS', 'No se requiere contrato a largo plazo', 'Aprovisione nuevos servidores en días', 'AWS administra las aplicaciones de los usuarios en la nube de AWS'],
    correctAnswer: ['No se requiere contrato a largo plazo'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿De qué es responsable el cliente de AWS según el modelo de responsabilidad compartida de AWS?',
    options: ['Controles de acceso físico', 'Cifrado de datos', 'Eliminación segura de dispositivos de almacenamiento', 'Gestión de riesgos ambientales'],
    correctAnswer: ['Cifrado de datos'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál de los siguientes servicios en la nube de AWS se puede utilizar para ejecutar una base de datos relacional administrada por el cliente?',
    options: ['Amazon EC2', 'Amazon Route 53', 'Amazon ElastiCache', 'Amazon DynamoDB'],
    correctAnswer: ['Amazon EC2'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: 'Una empresa está buscando una solución de almacenamiento de datos escalable. ¿Cuál de las siguientes soluciones de AWS satisfaría las necesidades de la empresa?',
    options: ['Amazon Simple Storage Service (Amazon S3)', 'Amazon DynamoDB', 'Amazon Kinesis', 'Amazon Redshift'],
    correctAnswer: ['Amazon Simple Storage Service (Amazon S3)'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Qué afirmación describe mejor a Elastic Load Balancing?',
    options: ['Traduce un nombre de dominio en una dirección IP usando DNS.', 'Distribuye el tráfico de aplicaciones entrantes a través de una o más instancias de Amazon EC2.', 'Recopila métricas en instancias Amazon EC2 conectadas.', 'Ajusta automáticamente la cantidad de instancias de Amazon EC2 para admitir el tráfico entrante.'],
    correctAnswer: ['Distribuye el tráfico de aplicaciones entrantes a través de una o más instancias de Amazon EC2.'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuáles de las siguientes son formas válidas para que un cliente interactúe con los servicios de AWS? (Escoge dos.)',
    options: ['Command line interface', 'On-premises', 'Software Development Kits', 'Software-as-a-service', 'Hybrid'],
    correctAnswer: ['Command line interface', 'Software Development Kits'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  },
  {
    question: 'Las múltiples regiones de la nube de AWS son un ejemplo de:',
    options: ['Agility', 'Global infrastructure', 'Elasticity', 'Pay-as-you-go pricing'],
    correctAnswer: ['Global infrastructure'],
    selectedAnswers: [] as string[],
    maxAnswers: 1
  },
  {
    question: '¿Cuál de los siguientes servicios de AWS se puede utilizar para entregar grandes cantidades de contenido de video en línea con la latencia más baja posible? (Escoge dos.)',
    options: ['AWS Storage Gateway', 'Amazon S3', 'Amazon Elastic File System (EFS)', 'Amazon Glacier', 'Amazon CloudFront'],
    correctAnswer: ['Amazon S3', 'Amazon CloudFront'],
    selectedAnswers: [] as string[],
    maxAnswers: 2
  }
  
  
];
