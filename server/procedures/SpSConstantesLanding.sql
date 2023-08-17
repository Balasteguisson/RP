BEGIN
    -- Crea una tabla temporal
    CREATE TEMPORARY TABLE tiposVariable (
        tipo varchar(50),
        unidades varchar(50),
        valorMinimoHab varchar(10),
        valorMaximoHab varchar(10),
        fechaMedida date,
        valorMedida varchar(10),
        valorMedida2 varchar(10)
    );
    
    -- Inserta datos en la tabla temporal
    INSERT INTO tiposVariable
    SELECT nombreTipo, null, valorMinimoHab, valorMaximoHab, null, null, null FROM TiposConstanteVital;

    -- Actualiza tiposVariable con la medida del paciente PAC de ese tipo tomada más recientemente
    UPDATE tiposVariable SET
        fechaMedida = (
            SELECT fechaRegistro FROM RegistroConstanteVital RC
            WHERE RC.codPaciente = codPaciente AND RC.tipoConstante = tiposVariable.tipo
            ORDER BY fechaMedida DESC LIMIT 1
        ),
        valorMedida = (
            SELECT valorRegistrado1 FROM RegistroConstanteVital RC
            WHERE RC.codPaciente = codPaciente AND RC.tipoConstante = tiposVariable.tipo
            ORDER BY fechaMedida DESC LIMIT 1
        ),
        valorMedida2 = (
            SELECT valorRegistrado2 FROM RegistroConstanteVital RC
            WHERE RC.codPaciente = codPaciente AND RC.tipoConstante = tiposVariable.tipo
            ORDER BY fechaMedida DESC LIMIT 1
        );

    -- Selecciona y muestra los datos de la tabla temporal
    SELECT * FROM tiposVariable;

    -- Elimina la tabla temporal al final del procedimiento
    DROP TEMPORARY TABLE IF EXISTS tiposVariable;
END